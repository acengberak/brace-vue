require('./bootstrap');

import 'es6-promise/auto'
import axios from 'axios'
import Vue from 'vue'
import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Index from './Index'
import AdminDashboard from './components/pages/admin/AdminDashboard'
import auth from './auth'
import router from './router'

// Set Vue globally
window.Vue = Vue

// Set Vue router
Vue.router = router
Vue.use(VueRouter)


// import Form from "./utilities/Form";
// window.Form = Form;

// Set Vue authentication
Vue.use(VueAxios, axios)
axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api`

Vue.use(VueAuth, auth)

// Load Index
Vue.component('index', Index)
Vue.component('admindashboard', AdminDashboard)
const app = new Vue({
  el: '#app',
  router
});

