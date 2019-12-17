import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from "@vue/test-utils";
import Toast from '../../src/toast/toast'
chai.use(sinonChai)

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.exist
    })
    describe('props', () => {
        it('接收enableHtml', () => {
            const wrapper=mount(Toast,{
                slots:{
                    default:['<span id="test">hi</span>']
                },
                propsData: {
                    autoClose: false
                }
            })
                expect(wrapper.find('#test')).to.exist
        })
        it('接收closeButton', () => {
            const callback = sinon.fake()
            const wrapper=mount(Toast,{
                propsData: {
                    closeButton: {
                        text: 'close it',
                        callback
                    }
                }
            })
            let closeButton = wrapper.find('.close').element
            expect(closeButton.innerText).to.eq('close it')
            closeButton.click()
            expect(callback).to.have.been.called
        })
        it('接收position', () => {
            const wrapper=mount(Toast,{
                propsData: {
                    position: 'bottom'
                }
            })
            expect(wrapper.classes('position-bottom')).to.eq(true)
        })
    })
})