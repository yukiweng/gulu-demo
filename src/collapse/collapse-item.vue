<template>
    <div class="collapseItem" @click="click" :name="name">
        <span class="title" ref="title">
            {{title}}
            <span class="iconWrapper">
                <g-icon name="down" v-if="show"></g-icon>
                <g-icon name="right" v-else></g-icon>
            </span>
        </span>
        <div class="contentWrapper" v-if="show" ref="contentWrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import gIcon from "../icon"
    import Vue from 'vue'
    Vue.component('g-icon',gIcon)
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
            this.$parent && this.$parent.$on('update:selected', (name) => {
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
            click(event) {
                if (this.show == false) {
                    this.open()
                    this.accordion && this.$parent.$emit('update:selected', this.name)
                }else{
                    if(this.$refs.title === event.target || this.$refs.title.contains(event.target)) {
                        this.close()
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .collapseItem {
        border: 1px solid #999;
        &:first-child{
            border-top-left-radius:4px ;
            border-top-right-radius:4px ;
        }
        &:last-child{
            border-bottom-left-radius:4px ;
            border-bottom-right-radius:4px ;

        }
        &:not(:last-child){
            border-bottom:none
        }
        > .title{
            display: inline-block;
            width: 100%;
            padding: 0.5em 1em;
            cursor: pointer;
            > .iconWrapper{
                float: right;
            }
        }
        > .contentWrapper{
            padding: 0.5em 1em;
        }
    }

</style>
