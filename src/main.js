// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// require('bootstrap')
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})
