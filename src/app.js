import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Sider from "./sider";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Toast from "./toast"
import plugin from "./plugin";
Vue.use(plugin)

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout',Layout)
Vue.component('g-sider',Sider)
Vue.component('g-header',Header)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-toast',Toast)


new Vue({
    el: '.demo',
    data: {
        loading1: false,
        loading2: false,
        msg:'hi,张三'
    },
    created(){
        this.$toast('我是message哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 我是message哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',{
            close:{
              autoClose:true,
                autoCloseDelay:3
            },
            closeButton:{
                text:'关闭',
                callback(){console.log('用户点击关闭了')}
            }
        })
    }
})


