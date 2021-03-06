// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
require('../node_modules/jquery/dist/jquery.min.js')
require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
require('../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
