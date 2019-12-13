import Vue from 'vue'
import Button from './button/button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button/button-group'
import Input from './input'
import Row from './grid/row'
import Col from './grid/col'
import Layout from './layout/layout'
import Sider from "./layout/sider";
import Header from "./layout/header";
import Content from "./layout/content";
import Footer from "./layout/footer";
import Toast from "./toast/toast"
import plugin from "./toast/plugin";
import Tabs from "./tabs/tabs"
import TabsHead from "./tabs/tabs-head"
import TabsItem from "./tabs/tabs-item"
import TabsBody from "./tabs/tabs-body"
import TabsPane from "./tabs/tabs-pane"
import Popover from "./popover"

Vue.use(plugin)

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-sider', Sider)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover',Popover)

new Vue({
    el: '.demo',
    data: {
        selectedTab:'comic'
    },
    methods: {
        showToast1(){
            this.showToast('top')
        },
        showToast2(){
            this.showToast('middle')
        },
        showToast3(){
            this.showToast('bottom')
        },
        showToast(position) {
            this.$toast(`${parseInt(Math.random()*100)}岁的黑猫警长ooo`, {
                position: position,
                enableHtml: false,
                autoClose: 2,
                closeButton: {
                    text: '关闭',
                    callback() {
                        console.log('用户点击关闭了')
                    }
                }
            })
        },
        yy(){
            console.log('yy');
        }
    }
})


