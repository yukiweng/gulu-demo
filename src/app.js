import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: '.demo',
    data: {
        loading1: false,
        loading2: false
    }
})

//单元测试
import chai from 'chai'
const expect = chai.expect

{
    let app = document.createElement('div')
    app.id = "myapp"
    document.body.appendChild(app)
    let test = Vue.extend(Button)
    let mytest = new test({
        propsData: {
            icon: 'setting'
        }
    })
    mytest.$mount('#myapp')
    let useEl = mytest.$el.querySelector('use')
    let href = useEl.getAttribute('xlink:href')
    expect(href).to.equal('#i-setting')
    mytest.$el.remove()
    mytest.$destroy()
}
{
    let app = document.createElement('div')
    app.id = "myapp"
    document.body.appendChild(app)
    let test = Vue.extend(Button)
    let mytest = new test({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    mytest.$mount('#myapp')
    let useEl = mytest.$el.querySelector('use')
    let href = useEl.getAttribute('xlink:href')
    expect(href).to.equal('#i-loading')
    mytest.$el.remove()
    mytest.$destroy()
}
{
    let app = document.createElement('div')
    app.id = "myapp"
    document.body.appendChild(app)
    let test = Vue.extend(Button)
    let mytest = new test({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    })
    mytest.$mount('#myapp')
    let svg = mytest.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.equal('2')
    mytest.$el.remove()
    mytest.$destroy()
}