const expect = chai.expect;
import Vue from 'vue'
import CollapseItem from '../src/collapse/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('CollapseItem', () => {
    it('存在.', () => {
        expect(CollapseItem).to.exist
    })
    describe('props', () => {
        const Constructor=Vue.extend(CollapseItem)
        let vm
        afterEach(()=>{vm.$destroy()})
        it('接收selected', () => {
            vm=new Constructor({
                propsData:{
                    title:'标题'
                }
            }).$mount()
            expect(vm.$refs.title.innerHTML.indexOf('标题')>=0).to.be.true
        })
        it('接收name', () => {

            vm=new Constructor({
                propsData:{
                    name:'test'
                }
            }).$mount()
            expect(vm.$el.getAttribute('name')).to.eq('test')
        })
    })
})