import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Axios from 'axios';

import './plugins/vuetify'
import './plugins/vue-router'

import Home from './components/Home'
import Blog from "./components/Blog";

Vue.config.productionTip = false

Axios.defaults.baseURL = process.env.API_ENDPOINT;

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/blog', component: Blog }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
