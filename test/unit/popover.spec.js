import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
chai.use(sinonChai)
import Popover from '../../src/popover'

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.exist
    })
    describe('props', () => {
        it('可以设置position.', (done) => {
            const wrapper = mount(Popover, {
                slots: {
                    default: {template: `<button>点我</button>`},
                    content: '<div>弹出内容</div>'
                },
                propsData: {
                    position: 'bottom'
                }
            })
            wrapper.find('button').trigger('click')
                setTimeout(()=>{
                    const contentWrapper=document.body.querySelector('.contentWrapper')
                    expect(contentWrapper.classList.contains('position-bottom')).to.be.true
                    done()
                },1500)
        })

        it('接收trigger',(done)=>{
            const wrapper = mount(Popover, {
                slots: {
                    default: {template: `<button>点我</button>`},
                    content: '<div>弹出内容</div>'
                },
                propsData: {
                    position: 'bottom',
                    trigger:'hover'
                }
            })
            expect(wrapper.find('.contentWrapper').element).to.not.exist
            wrapper.find('.popover').trigger('mouseenter')
            setTimeout(()=>{
                expect(wrapper.find('.contentWrapper').element).to.exist
                done()
            },1500)
        })
    })
})