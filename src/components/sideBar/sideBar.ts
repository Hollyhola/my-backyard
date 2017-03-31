import { Component } from 'vue-typed'
import * as Vue from 'vue'

@Component({
    template: require('./sideBar.html')
})
export class sideBar {
    get time() {
                return this.$store.state.totalTime
    }
}
export default {
    name: 'sideBar',
    computed: {
            
        }
}