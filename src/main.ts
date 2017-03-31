import { Component } from 'vue-typed'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store'
import  * as Vue from 'vue'


import { home } from './components/home/home'
import { timeEntries } from './components/timeEntries/timeEntries'
import { sideBar } from './components/sideBar/sideBar'
import { logTime } from './components/logTime/logTime'
import { app } from './App'

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  {path: '/',component: home},
  {path: '/home', component: home},
  {
    path: '/time-entries',
    component: timeEntries,
    children: [{
      path: 'log-time',
      component: logTime
    }]
  }
]

const router = new VueRouter({
  routes
})
new Vue({
  el: '#app-main',
  store,
  router,
  components: {app,timeEntries},
  render: h => h(app),
})