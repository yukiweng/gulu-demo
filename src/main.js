import Vue from 'vue/dist/vue.esm.js'
import Button from './button/button.vue'
import Icon from './icon.vue'




Vue.component('g-button', Button)
Vue.component('g-icon', Icon)

new Vue({
el:'.demo'
})
