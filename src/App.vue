<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="javascript:void(0)" >
           Site Logo
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" v-if="!user" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" v-if="user" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" v-if="user" to="/employee">Employee</router-link>
          </li>
          <li class="nav-item">
            <span @click="logout"  class="block my-7">
                  <router-link class="nav-link pr-3" to="" v-if="user">Logout</router-link>  
              </span>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
        // import { mapGetters } from 'vuex'
        export default {
            name: 'App',
            data() {
                return {
                    user: {},
                    token:null,
                    mobileMenu: false
                }
            },
            created:function (){
            console.log('created')
              },
              beforeCreate : function (){
            console.log('beforeCreate')

              },
            beforeMount : function (){
            console.log('beforeMount')
            },
            mounted() {
              console.log('mounted')
                this.user = JSON.parse(window.localStorage.getItem('userData'))
                this.token = JSON.parse(window.localStorage.getItem('jwt'))
            },
            methods: {
                logout() {
                    window.localStorage.removeItem('jwt')
                    window.localStorage.removeItem('userData')
                    window.localStorage.removeItem('bookmarks')
                    //this.$router.push('/login')
                    this.$router.replace('/')
                    this.$router.go('/')
                },
                
            }
        }
    </script>