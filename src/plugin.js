import Toast from './toast'

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            let Constructor = Vue.extend(Toast)
            let {close,closeButton}=toastOptions
            let {autoClose,autoCloseDelay}=close
            let toast = new Constructor({
                propsData: {
                    autoClose,
                    autoCloseDelay,
                    closeButton
                }
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}