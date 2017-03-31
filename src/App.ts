import { Component } from 'vue-typed'
import * as Vue from 'vue'
import {sideBar} from './components/sideBar/sideBar'
@Component({
    template: require('./App.html'),
    components: {sideBar}
})

export class app {
}
