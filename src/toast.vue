<template>
    <div class="toast">
        <slot></slot>
        <div v-if="closeButton" class="line" ref="line"></div>
        <span v-if="closeButton" class="close" @click="onClickClose" ref="button">{{closeButton.text}}</span>
    </div>

</template>

<script>
    export default {
        name: 'g-toast',
        props: {
            autoClose: {
                type: Boolean,
                default: true,
            },
            autoCloseDelay: {
                type: Number,
                default: 5
            },
            closeButton: {
                type: Object
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
                    }, this.autoCloseDelay * 1000)
                }
            },
            updateStyle() {
                this.$nextTick(() => {
                    this.$refs.line.style.height = getComputedStyle(this.$el).height
                    this.$refs.button.style.lineHeight=getComputedStyle(this.$el).height
                })
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
    .toast {
        line-height: 1.8;
        min-height: 40px;
        font-size: $font-size;
        background: $toast-bg;
        box-shadow: $toast-box-shadow;
        color: $toast-color;
        border-radius: 4px;
        padding: 0px 12px;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;

        > .close {
            margin-left: 12px;
            flex-shrink: 0;
        }

        > .line {
            border-left: 1px solid #999;
            height: 100%;
            margin-left: 4px;
        }
    }
</style>