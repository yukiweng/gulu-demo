<template>
    <div v-if="show" class="sider" :style="`width:${width}px`">
        <g-icon v-if="deleteButton" name="delete" @click.native="remove" class="close"></g-icon>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'g-sider',
        data(){
            return {show:true}
        },
        props: {
            width: {
                type: [String, Number],
                default: 200
            },
            deleteButton:{
                type:Boolean,
                default: false
            }
        },
        methods:{
            remove(){
                this.show=!this.show
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sider {
        position: relative;
        > .close {
            position: absolute;
            top:4px;
            right:4px
        }
    }
</style>