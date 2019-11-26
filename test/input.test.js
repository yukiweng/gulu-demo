const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.exist
    })
    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('可以接收value.', () => {
            vm = new Constructor({
                propsData: {
                    value: '123'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('123')

        })
        it('可以接收disabled.', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)

        })
        it('可以接收error.', () => {
            vm = new Constructor({
                propsData: {
                    error: 'getError'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.error-message')
            expect(errorMessage.innerText).to.equal('getError')
        })
    })
    describe('触发事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{vm.$destroy()})
        it('可以触发change/input/focus/blur', () => {
            ['change','input','focus','blur'].forEach((eventName)=>{
                vm=new Constructor().$mount()
                const callback=sinon.fake()
                vm.$on(eventName,callback)
                let event=new Event(eventName)
                let inputElement=vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith(event)
            })
        })
    })
})