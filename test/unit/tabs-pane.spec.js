import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import {mount} from "@vue/test-utils";
import TabsPane from "../../src/tabs/tabs-pane"
chai.use(sinonChai)

describe('TabsPane', () => {
    it('存在.', () => {
        expect(TabsPane).to.exist
    })
    describe('props', () => {
        it('接收name',(done)=>{
            const wrapper=mount(TabsPane,{
                propsData:{
                    name:'test'
                }
            })
            wrapper.vm.active=true
            setTimeout(()=>{
                expect(wrapper.attributes('data-name')).to.eq('test')
                done()
            },1500)
        })
    })
})