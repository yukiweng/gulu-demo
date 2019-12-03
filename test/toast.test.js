const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.exist
    })
    describe('props', () => {
        const Constructor = Vue.extend(Toast)
        let vm
        it('接收enableHtml', () => {
            vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            })
            vm.$slots.default = ['<span id="test">hi</span>>']
            vm.$mount()
            let test = vm.$el.querySelector('#test')
            expect(test).to.exist
        })
        it('接收autoClose', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    autoClose: 1,
                }
            }).$mount(div)
            vm.$on('close', () => {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })
        })
        it('接收closeButton', () => {
            const callback = sinon.fake()
            vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: 'close it',
                        callback
                    }
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.innerText).to.eq('close it')
            closeButton.click()
            expect(callback).to.have.been.called
        })
        it('接收position', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    position: 'bottom'
                }
            }).$mount(div)
            expect(getComputedStyle(vm.$el).bottom).to.eq('0px')
        })
    })
})