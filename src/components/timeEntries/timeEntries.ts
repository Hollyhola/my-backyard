import { Component } from 'vue-typed'
import * as Vue from 'vue'

@Component({
    template: require('./timeEntries.html')
})


export class timeEntries {
    name: 'timeEntries';
    //conputed
    get plans(){
            return this.$store.state.list
        }
  
    //methods
    deletePlan(idx) {
        //减去总时间
        this.$store.dispatch('decTotalTime',this.plans[idx].totalTime)
        //删除该计划
        this.$store.dispatch('deletePlan',idx)
    }
}