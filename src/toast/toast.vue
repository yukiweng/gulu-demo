<template>
    <div class="toastWrapper" :class="`position-${position}`">
        <div class="toast">
            <div v-if="enableHtml" v-html="$slots.default[0]"></div>
            <div v-else>
                <slot></slot>
            </div>
            <div v-if="closeButton" class="line" ref="line"></div>
            <span v-if="closeButton" class="close" @click="onClickClose" ref="button">{{closeButton.text}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'g-toast',
        props: {
            enableHtml: {
                type: Boolean,
                default: false
            },
            autoClose: {
                type: [Boolean,Number],
                default: 5,
                validator(value) {
                    return value===false||typeof value==='number'
                }
            },
            closeButton: {
                type: Object,
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'middle', 'bottom'].indexOf(value) >= 0
                }
            }
        },
        mounted() {
            this.updateStyle()
            this.execAutoClose()
        },
        methods: {
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoClose * 1000)
                }
            },
            updateStyle() {
                if(this.closeButton) {
                    this.$nextTick(() => {
                        this.$refs.line.style.height = getComputedStyle(this.$el).height
                        this.$refs.button.style.lineHeight = getComputedStyle(this.$el).height
                    })
                }
            },
            close() {
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            onClickClose() {
                if (this.closeButton && typeof this.closeButton.callback == 'function') {
                    this.closeButton.callback()
                }
                this.close()
            }

        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-bg: rgba(0, 0, 0, 0.6);
    $toast-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
    $toast-color: white;
    $animation-duration:0.5s;
    @keyframes slide-down {
        0% {opacity: 0;transform: translateY(-100%)}
        100% {opacity: 1;transform: translateY(0)}
    }
    @keyframes fade-in {
        0% {opacity: 0}
        100% {opacity: 1}
    }
    @keyframes slide-up {
        0% {opacity: 0;transform: translateY(100%)}
        100% {opacity: 1;transform: translateY(0)}
    }
    .toastWrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        &.position-top {
            top: 0;
            > .toast {animation: slide-down $animation-duration;}
        }
        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
            > .toast {animation: fade-in $animation-duration;}
        }
        &.position-bottom {
            bottom: 0;
            > .toast {animation: slide-up $animation-duration;}
        }
    }
    .toast {
        line-height: 1.8;
        min-height: 40px;
        font-size: $font-size;
        background: $toast-bg;
        box-shadow: $toast-box-shadow;
        color: $toast-color;
        border-radius: 4px;
        padding: 0px 12px;
        display: flex;
        align-items: center;
        > .close {
            margin-left: 12px;
            flex-shrink: 0;
        }
        > .line {
            border-left: 1px solid #999;
            height: 100%;
            margin-left: 12px;
        }
    }
</style>