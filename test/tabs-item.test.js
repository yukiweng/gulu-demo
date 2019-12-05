const expect = chai.expect;
import Vue from 'vue'
import TabsItem from "../src/tabs-item"

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.exist
    })
    describe('props', () => {
        it('接收name',()=>{
            const Constructor=Vue.extend(TabsItem)
            const vm=new Constructor({
                propsData:{
                    name:'test'
                }
            }).$mount()
            expect(vm.$el.getAttribute('data-name')).to.eq('test')
            vm.$destroy()
        })
    })
})