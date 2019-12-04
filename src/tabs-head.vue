<template>
    <div class="tabsHead" :class="position">
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
            return {position: 'horizontal'}
        },
        mounted() {
            this.eventBus.$on('update:selected', (name, vm) => {
                this.$nextTick(() => {
                    let {width, height, top, left} = vm.$el.getBoundingClientRect()
                    if (this.position == 'horizontal') {
                        this.$refs.line.style.width = `${width}px`
                        this.$refs.line.style.left = `${left}px`
                    } else if (this.position == 'vertical') {
                        this.$refs.line.style.top = `${top}px`
                        this.$refs.line.style.height = `${height}px`
                    }
                })
            })
        }
    }
</script>

<style lang="scss" scoped>
    $tabs-horizontal-height: 40px;
    $blue: dodgerblue;
    $tabs-vertical-height: 100px;
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