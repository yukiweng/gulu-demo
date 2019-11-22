import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: '.demo',
    data: {
        loading1: false,
        loading2: false
    }
})

//单元测试
import chai from 'chai'
const expect = chai.expect

