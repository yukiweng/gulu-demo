const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs/tabs'
import TabsHead from '../src/tabs/tabs-head'
import TabsItem from "../src/tabs/tabs-item"

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    })
    describe('props', () => {
        const div=document.createElement('div')
        document.body.appendChild(div)
        let vm
        afterEach(()=>{
            vm.$el.remove()
            vm.$destroy()
        })
        it('接收selected', (done) => {
            div.innerHTML=`
            <g-tabs selected="entertainment">
                <g-tabs-head>
                    <g-tabs-item name="entertainment">娱乐</g-tabs-item>
                    <g-tabs-item name="comic">动漫</g-tabs-item>
                </g-tabs-head>
            </g-tabs>
            `
            vm=new Vue({
                el:div
            })
            vm.$nextTick(()=>{
                let el=vm.$el.querySelector('.tabsItem[data-name="entertainment"]')
                expect(el.classList.contains('active')).to.be.true
                done()
            })
        })
        it('接收direction',()=>{
            const Constructor=Vue.extend(Tabs)
            vm =new Constructor({
                propsData:{
                    direction:'vertical'
                }
            }).$mount(div)
          expect(vm.$el.classList.contains('vertical')).to.be.true
        })
    })
})