import { Component } from 'vue-typed'
import * as Vue from 'vue'

@Component({
    template: require('./logTime.html')
})

export class logTime {
    name: 'logTime'
    //data
    date: '';
    totalTime: '';
    comment: '';

    save() {
         const plan = {
                    name : '二哲',
                    image : 'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256',
                    date : this.date,
                    totalTime : this.totalTime,
                    comment : this.comment
                };
                this.$store.dispatch('savePlan', plan)
                this.$store.dispatch('addTotalTime', this.totalTime)
                this.$router.go(-1)
    }
}