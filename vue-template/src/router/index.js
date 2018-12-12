// VueRouter
import Vue from 'vue'
import Router from 'vue-router'

// COMPONENTS
import Home from './../components/index/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
      {
        path: '/',
        component: Home
      },
    ]
  })

