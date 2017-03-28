import { Component } from 'vue-typed'
import * as Vue from 'vue'

@Component ({
    template: `<h2>{{homemsg}}</h2>`
})

export class home {
    homemsg="this is home page"
}