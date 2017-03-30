import { Component } from 'vue-typed'
import VueRouter from 'vue-router'
import * as Vue from 'vue'
import { home } from './components/home/home'
import { app } from './App'
Vue.use(VueRouter)
@Component({
  template: `
    <div>foo</div>
  `
})

class Foo {}

@Component({
  template: '<div>bar</div>'
})

class Bar {

}

const routes = [
  { path: '/home', component: home},
  { path: '/bar', component: Bar}
  
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app-main',
  components: {app},
  render: h => h(app),
  router
})