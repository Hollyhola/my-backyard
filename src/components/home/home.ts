import { Component } from 'vue-typed'
import * as Vue from 'vue'

@Component ({
    template: require('./home.html')
})

export class home {
    data() {
        return{
            isactive: true
            
        }
    }
}