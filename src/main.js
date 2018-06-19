import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'
axios.defaults.baseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})
axios.interceptors.request.eject(reqInterceptor)
var app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
app()
