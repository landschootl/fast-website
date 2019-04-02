import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Axios from 'axios';

Vue.config.productionTip = false

Axios.defaults.baseURL = process.env.API_ENDPOINT;

new Vue({
  render: h => h(App),
}).$mount('#app')
