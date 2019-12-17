<template>
    <div class="tabsHead" :class="direction" ref="head">
        <slot></slot>
        <div class="actions">
            <slot name="actions"></slot>
        </div>
        <div class="line" ref="line">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'g-tabs-head',
        inject: ['eventBus'],
        data() {
            return {direction: 'horizontal'}
        },
        mounted() {
            this.eventBus.$on('update:selected', (name, vm) => {
                this.$nextTick(() => {
                    let {width, height, top, left} = vm.$el.getBoundingClientRect()
                    let {top:top2, left:left2} = this.$refs.head.getBoundingClientRect()
                    if (this.direction == 'horizontal') {
                        this.$refs.line.style.width = `${width}px`
                        this.$refs.line.style.left = `${left-left2}px`
                    } else if (this.direction == 'vertical') {
                        this.$refs.line.style.top = `${top-top2}px`
                        this.$refs.line.style.height = `${height}px`
                    }
                })
            })
        }
    }
</script>

<style lang="scss" scoped>
    .tabsHead {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;

        &.horizontal {
            flex-direction: row;
            height: $tabs-horizontal-height;
            > .line {
                position: absolute;
                bottom: 0px;
                border-bottom: 1.5px solid $blue;
                transition: all 0.3s
            }
            > .actions {
                margin-left: auto;
                margin-right: 1em;
            }
        }

        &.vertical {
            flex-direction: column;
            height: $tabs-vertical-height;
            > .line {
                position: absolute;
                right: 0;
                border-left: 1.5px solid $blue;
                transition: all 0.3s
            }
            > .actions {
                margin: auto;
            }
        }
    }
</style>