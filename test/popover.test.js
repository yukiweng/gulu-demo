const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.exist
    })
    describe('props', () => {
        it('接收position', (done) => {
            Vue.component('g-popover',Popover)
            const div=document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML=`
            <g-popover position="bottom" ref="popover">
                <template v-slot:content>
                    <div>我是内容</div>
                </template>
                <button>按钮</button>
            </g-popover>
            `
            const vm=new Vue({
                el:div
            })

            vm.$el.querySelector('button').click()
            setTimeout(()=>{
                const contentWrapper=document.body.querySelector('.contentWrapper')
                expect(contentWrapper.classList.contains('position-bottom')).to.be.true
                done()
            },1500)
        })
        it('接收trigger',(done)=>{
            Vue.component('g-popover',Popover)
            const div=document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML=`
            <g-popover trigger="hover" ref="popover">
                <template slot="content">
                    <div>我是内容</div>
                </template>
                <button>按钮</button>
            </g-popover>
            `
            const vm=new Vue({
                el:div
            })
            vm.$mount()
            vm.$refs.popover.visible=true
            let event=new Event('mouseenter')
            let button=vm.$el.querySelector('button')
            button.dispatchEvent(event)
            vm.$nextTick(()=>{
                const contentWrapper=vm.$el.querySelector('.contentWrapper')
                expect(contentWrapper).to.exist
                done()
            })
        })
    })
})