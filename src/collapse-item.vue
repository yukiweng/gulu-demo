<template>
    <div class="collapseItem" @click="click">
        {{title}}
        <div class="contentWrapper" v-if="show">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "g-collapse-item",
        data() {
            return {show: false, accordion: false, selected: ''}
        },
        props: {
            title: {
                type: String,
                required: true
            },
            name: {
                type: [String, Number],
                required: true
            }
        },
        mounted() {
            this.$nextTick(() => {
                if (this.selected == this.name) {
                    this.open()
                }
            })
            this.$parent.$on('update:selected', (name) => {
                if (name != this.name) {
                    this.close()
                }
            })
        },
        methods: {
            open() {
                this.show = true
            },
            close() {
                this.show = false
            },
            click() {
                if (this.show == false) {
                    this.open()
                    if (this.accordion) {
                        this.$parent.$emit('update:selected', this.name)
                    } else {
                        this.close()
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $border-radius:4px;
    .collapseItem {
        padding: 1em;
        border: 1px solid black;
        &:first-child{
            border-top-left-radius:$border-radius ;
            border-top-right-radius:$border-radius ;

        }

    }
</style>