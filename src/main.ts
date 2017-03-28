import { Component } from 'vue-typed'
import * as Vue from 'vue'

@Component({
  template: `
    <div>hello {{msg}}</div>
  `
})

class App extends Vue {
  msg = 'there'
}

new App({}).$mount('#app-main');
