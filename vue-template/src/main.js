// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// VUE
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.config.productionTip = false

// BOOTSTRAP
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import bModal from 'bootstrap-vue/es/components/modal/modal'
import bModalDirective from 'bootstrap-vue/es/directives/modal/modal'
Vue.use(BootstrapVue)
Vue.component('b-modal', bModal)
Vue.component('b-modal', bModalDirective)

//CUSTOM STYLES
import './css/style.css'

//VUE ROUTER
import router from './router'

/* Instance APP component */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
