import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import CollapseItem from '../../src/collapse/collapse-item'
chai.use(sinonChai)

describe('CollapseItem', () => {
    it('存在.', () => {
        expect(CollapseItem).to.exist
    })
    describe('props', () => {
        it('接收selected', () => {
            const wrapper=mount(CollapseItem,{
                propsData:{
                    title:'标题'
                }
            })
            const vm=wrapper.vm
            expect(vm.$refs.title.innerHTML.indexOf('标题')>=0).to.be.true
        })
        it('接收name', () => {
            const wrapper=mount(CollapseItem,{
                propsData:{
                    name:'test'
                }
            })
            const vm=wrapper.vm
            expect(vm.$el.getAttribute('name')).to.eq('test')
        })
    })
})