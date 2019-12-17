import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Input from '../../src/input'
chai.use(sinonChai)

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.exist
    })
    describe('props', () => {
        it('可以接收value.', () => {
            const wrapper = mount(Input, {
                propsData: {
                    value: '123'
                }
            })
            const inputElement = wrapper.find('input').element
            expect(inputElement.value).to.equal('123')

        })
        it('可以接收disabled.', () => {
            const wrapper = mount(Input, {
                propsData: {
                    disabled: true
                }
            })
            const inputElement = wrapper.find('input').element
            expect(inputElement.disabled).to.equal(true)

        })
        it('可以接收error.', () => {
            const wrapper = mount(Input, {
                propsData: {
                    error: 'getError'
                }
            })
            const useElement = wrapper.find('use').element
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = wrapper.element.querySelector('.error-message')
            expect(errorMessage.innerText).to.equal('getError')
        })
    })
    describe('触发事件', () => {
        it('可以触发change/input/focus/blur', () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                const wrapper = mount(Input, {
                    propsData: {
                        value: '123'
                    }
                })
                const callback = sinon.fake()
                wrapper.vm.$on(eventName, callback)
                let event = new Event(eventName)
                let inputElement = wrapper.find('input').element
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('123')
            })
        })
    })
})