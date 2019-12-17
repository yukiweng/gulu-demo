import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Col from '../../src/grid/col'
chai.use(sinonChai)

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.exist
    })
    describe('props',()=>{
        it('可以接收span/offset.', () => {
            const wrapper=mount(Col,{
                propsData: {
                    span:1
                }
            })
            expect(wrapper.classes('col-1')).to.eq(true)
        })
        it('可以接收ipad/pc/wide-pc.', () => {
            ['ipad','pc','wide-pc'].forEach((name)=>{
                const wrapper=mount(Col,{
                    propsData: {
                        ipad:{
                            span:1,
                            offset:1
                        },
                        pc:{
                            span:1,
                            offset:1
                        },
                        widePc:{
                            span:1,
                            offset:1
                        }
                    }
                })
                expect(wrapper.classes(`col-${name}-1`)).to.equal(true)
                expect(wrapper.classes(`offset-${name}-1`)).to.equal(true)
            })
        })
    })
})