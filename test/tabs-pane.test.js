const expect = chai.expect;
import Vue from 'vue'
import TabsPane from "../src/tabs/tabs-pane"

Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsPane', () => {
    it('存在.', () => {
        expect(TabsPane).to.exist
    })
    describe('props', () => {
        it('接收name',(done)=>{
            const Constructor=Vue.extend(TabsPane)
            const vm=new Constructor({
                propsData:{
                    name:'test'
                }
            }).$mount()
            vm.active=true
            vm.$nextTick(()=>{
                expect(vm.$el.getAttribute('data-name')).to.eq('test')
                vm.$destroy()
                done()
            })
        })
    })
})