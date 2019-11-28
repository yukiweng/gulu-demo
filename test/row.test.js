const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    })
    describe('可接收gutter和align.',()=>{
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('可以接收gutter.', (done) => {
            Vue.component('g-row',Row)
            Vue.component('g-col',Col)
            const div=document.createElement('div')
            div.innerHTML=`
                <g-row gutter="20">
                    <g-col span="12"></g-col>
                    <g-col span="12"></g-col>
                </g-row>
                `
            document.body.appendChild(div)
            vm=new Vue({
                el:div
            })
            setTimeout(()=>{
                const row=vm.$el.querySelector('.row')
                expect(getComputedStyle(row).marginLeft).to.equal('-10px')
                expect(getComputedStyle(row).marginRight).to.equal('-10px')
                const cols=vm.$el.querySelectorAll('.col')
                expect(getComputedStyle(cols[0]).paddingRight).to.equal('10px')
                expect(getComputedStyle(cols[1]).paddingLeft).to.equal('10px')
                done()
            },0)
        })
        it('可以接收align.',()=>{
            const div=document.createElement('div')
            document.body.appendChild(div)
            const Constructor=Vue.extend(Row)
            vm=new Constructor({
                propsData:{
                    align:'right'
                }
            }).$mount(div)
            const element=vm.$el
            expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
            vm.$el.remove()
        })
    })
})