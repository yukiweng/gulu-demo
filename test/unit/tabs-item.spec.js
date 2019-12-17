import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import {mount} from "@vue/test-utils";
import TabsItem from "../../src/tabs/tabs-item"
chai.use(sinonChai)

describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.exist
    })
    describe('props', () => {
        it('接收name',()=>{
            const wrapper=mount(TabsItem,{
                propsData:{
                    name:'test'
                }
            })
            expect(wrapper.attributes('data-name')).to.eq('test')
        })
    })
})