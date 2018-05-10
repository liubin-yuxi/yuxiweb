// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('bootstrap')
import Vue from 'vue'
import App from './App'
import router from './router'
import service from './services/service'
import $script from 'scriptjs'
import domain from './config'
// import store from './store'
import filters from './utils/filters'
import VeeValidate from 'vee-validate';
var VueCookie = require('vue-cookie');
import { Message,Pagination,DatePicker,Cascader } from 'element-ui';
const STATUS = require('./constants/status').STATUS
const TYPE = require('./constants/type').TYPE

Vue.prototype.$message = Message
Vue.use(Pagination)

Vue.use(VeeValidate)
Vue.use(VueCookie);
Vue.use(DatePicker);
Vue.use(Cascader);

Vue.config.productionTip = false

//register filters
for(name in filters){
  Vue.filter(name, filters[name])
}

/* eslint-disable no-new */
Vue.prototype.$status = STATUS
Vue.prototype.$type = TYPE

new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})

let userInfo = JSON.parse(Vue.prototype.$cookie.get('userInfo'))
if(userInfo){
  store.commit('setUserInfo',userInfo)
}