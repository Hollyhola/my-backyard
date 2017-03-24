


import Vue from 'vue/dist/vue'
import Component from 'vue-class-component'
// import * as VueRouter from 'vue-router'
import { VueComponent } from 'vue-typescript'
import app from './App.vue'
import About from './components/about/about.vue'
import Home from './components/home/home.vue'
  new Vue({
    el: '#app-main',
    components: {app, About,Home},
    template: `
      <div>
        <app></app>
        <About></About>
        <Home></Home>
      </div>
   
    
    `
  })