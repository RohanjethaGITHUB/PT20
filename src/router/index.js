import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'signup',
  //   component: () => import('../components/Signup.vue')
  // },
  {
    path: '/',
    name: 'login',
    meta:{
      requiresLogin: true
    },
    component: () => import('../components/Login.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta:{
      requiresLogin: true
    },
    component: () => import('../components/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta:{
      requiresAuth: true
    },
    component: () => import('../components/Admin/Dashboard.vue')
  },
  {
    path: '/employee',
    name: 'employee',
    meta:{
      requiresAuth: true
    },
    component: () => import('../components/Admin/Employee.vue')
  },
  // {
  //   path: '/forgot-password',
  //   name: 'forgot-password',
  //   component: () => import('../components/ForgotPassword.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    var token = JSON.parse(window.localStorage.getItem('userData'))
    if (!token) {
      next({
          name: 'login'
      })
    } else {
      console.log(to);
      next()
    }
  }
  else {
    var token_data = JSON.parse(window.localStorage.getItem('userData'))
    if (token_data) {
      console.log(to.name)
      if(to.name == 'login'){
        next({
          name: 'dashboard'
      })
      }else{
        next()
      }
      
      // next({
      //     name: 'login'
      // })
    } else {
      
      next()
    }
    //next() // make sure to always call next()!
  }
})
export default router
