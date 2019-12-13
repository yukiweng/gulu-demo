const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.exist
    })
    describe('props',()=>{
        const div=document.createElement('div')
        document.body.appendChild(div)
        const Constructor=Vue.extend(Col)
        let vm
        afterEach(() => {
            vm.$el.remove()
            vm.$destroy()
        })
        it('可以接收span/offset.', () => {
            vm=new Constructor({
                propsData: {
                    span:1
                }
            }).$mount(div)
            const element=vm.$el
            expect(element.classList.contains('col-1')).to.equal(true)
        })
        it('可以接收offset.', () => {
            vm=new Constructor({
                propsData: {
                    offset:1
                }
            }).$mount(div)
            const element=vm.$el
            expect(element.classList.contains('offset-1')).to.equal(true)
        })
        it('可以接收ipad/pc/wide-pc.', () => {
            ['ipad','pc','wide-pc'].forEach((name)=>{
                vm=new Constructor({
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
                }).$mount(div)
                const element=vm.$el
                expect(element.classList.contains(`col-${name}-1`)).to.equal(true)
                expect(element.classList.contains(`offset-${name}-1`)).to.equal(true)
            })
        })
    })
})