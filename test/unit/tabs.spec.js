import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import {mount} from "@vue/test-utils";
import Tabs from '../../src/tabs/tabs'
chai.use(sinonChai)

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    })
    describe('props', () => {
        it('接收direction',()=>{
            const wrapper=mount(Tabs,{
                propsData:{
                    direction:'vertical'
                }
            })
          expect(wrapper.classes('vertical')).to.be.true
        })
    })
})