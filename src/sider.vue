<template>
    <div v-if="show" class="sider" :style=`width:${width}px`>
        <button class="closeButton" @click="remove">close</button>
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
        > .closeButton {
            position: absolute;
            top:0;
            right:0
        }
    }

</style>