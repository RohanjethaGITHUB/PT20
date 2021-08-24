<template>
  <div class="login-block">
      <div v-bind:class="[loader ? 'loader' : 'loaderhide']"></div>
    <div class="vue-tempalte">
      <form @submit="login">
        <h3>Sign In</h3>

        <div class="form-group">
          <label>Email address</label>
          <input
            type="email"
            v-model="email"
            class="form-control form-control-lg"
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control form-control-lg"
          />
        </div>

        <button
          type="submit"
          :disabled="password.length < 3"
          class="btn btn-dark btn-lg btn-block"
        >
          Sign In
        </button>

        <p class="forgot-password text-right mt-2 mb-4">
          <!-- <router-link to="/forgot-password">Forgot password ?</router-link> -->
        </p>

        <!-- <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div> -->
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
      error: false,
      loader : false,
      errorMsg: `An error occurred, please try again`,
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      this.loader = true;

      const config = {
        method: "post",
        url: "http://consulting.palladiumhub.com/api/Auth/SignIn",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: this.email,
          password: this.password,
        },
      };
       axios(config).then((response) => {
           
         let result = response.data;
         const jwt = result.token;
         if(result.user){
          const userData = result.user;
          window.localStorage.setItem('jwt', jwt)
          window.localStorage.setItem('userData', JSON.stringify(userData))
          this.loader = false;
          this.$router.push('/dashboard')
          this.$router.go('/dashboard')
           
         } else {
           alert("Invalid User");
           this.loader = false; 
         }
         
      });
      
    },
  },
};
</script>
<style scoped>
</style>