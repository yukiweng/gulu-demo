<template>
    <div class="popover" @click="onClick" ref="popover">
        <div class="contentWrapper" v-if="visible" ref="contentWrapper">
            <slot name="content"></slot>
        </div>
        <span class="triggerWrapper" ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>

</template>

<script>
    export default {
        name: "g-popover",
        data() {
            return {
                visible: false
            }
        },
        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper)
                let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left + window.pageXOffset + 'px'
                this.$refs.contentWrapper.style.top = top + window.pageYOffset + 'px'
            },
            onClickDocument(e) {
                if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
                ) {return}
                if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
                ) {return}
                this.close()
            },
            open() {
                this.visible=true
                setTimeout(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                }, 0)
            },
            close() {
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
            },
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close()
                    } else {
                        this.open()
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
$border-color:#333;
$border-radius:4px;
    .contentWrapper {
        border: 1px solid $border-color;
        border-radius: $border-radius;
        max-width: 20em;
        padding: 0.5em 1em;
        position: absolute;
        transform: translateY(-100%);
        margin-top:-20px;
        word-break: break-all;
        filter:drop-shadow(0 1px 1px rgba(0,0,0,0.5));
        background: white;
        &::before,&::after{
            content: '';
            border:10px solid transparent;
            display: block;
            position: absolute;
            left: 10px;;
        }
        &::before{
            border-top-color:$border-color;
            top: 100%;
        }
        &::after{
            border-top-color:white;
            top: calc(100% - 1px);

        }
    }

    .popover {
        display: inline-block;
        > .triggerWrapper {
            position: relative;
            display: inline-block;
        }
    }

</style>