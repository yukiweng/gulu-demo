const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/collapse/collapse'
import CollapseItem from '../src/collapse/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {
    it('存在.', () => {
        expect(Collapse).to.exist
    })
    describe('props', () => {
        it('接收selected', (done) => {
            Vue.component('g-collapse',Collapse)
            Vue.component('g-collapse-item',CollapseItem)
            const div=document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML=`
            <g-collapse selected="1">
               <g-collapse-item title="标题一" name="1" ref="test">内容一</g-collapse-item>
               <g-collapse-item title="标题二" name="2">内容二</g-collapse-item>
           </g-collapse>
            `
            const vm=new Vue({
                el:div
            })
            setTimeout(()=>{
                let contentWrapper=vm.$refs.test.$el.querySelector('.contentWrapper')
                expect(contentWrapper).to.exist
                vm.$el.remove()
                vm.$destroy()
                done()
            },1500)
        })
    })
})