<template>
    <div class="demo">
        <g-button @click="onClick">上方弹出</g-button>
    </div>
</template>

<script>
    import Button from '../../../src/button/button'
    import plugin from "../../../src/toast/plugin"
    import Vue from 'vue'
    Vue.use(plugin)
    export default {
        components:{
            'g-button':Button
        },
        methods:{
            onClick(){
                this.$toast('3秒后自动关闭',{
                    autoClose:3
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .demo /deep/ *{
        box-sizing: border-box;
    }
</style>