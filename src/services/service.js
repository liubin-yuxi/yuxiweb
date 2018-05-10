import Vue from 'vue'
import config from '../config'
import router from '../router'
const ERRORCODE = require('../constants/code').ERRORCODE

// Vue.prototype.$http = axios;
axios.defaults.baseURL = config.serviceDomain;

axios.interceptors.request.use(function (config) {
  // Do something before request is sent

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (resp) {
  if(resp.data.code === ERRORCODE.AUTHENTICATION_FAILED){
    //route to login
    router.push({ path: '/login'})
  }
  if(resp.data.code !== ERRORCODE.SUCCESS){
    let errorMsg = resp.data.errorMessage;
    if(errorMsg){
      Vue.prototype.$message.error(errorMsg);
    }
    return Promise.reject(resp);
  }
  return resp;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default axios