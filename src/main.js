import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/index.js'


const mock = false;
if (mock) {
  require("./config/mock")
}
// axios.defaults.baseURL = "/api"
// axios.defaults.baseURL = "https://www.fastmock.site/mock/3ed5f621ab8a105fc4b195e8c98437dc/api"
axios.defaults.timeout = 8000
axios.interceptors.request.use((config) => {
  // console.log("config =>", config);
  return config
})
axios.interceptors.response.use((config) => {
  // console.log("config(response) =>", config)
  const { data } = config;
  return data;
})


Vue.config.productionTip = false
Vue.prototype.axios = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
