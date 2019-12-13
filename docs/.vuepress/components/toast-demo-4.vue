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
                this.$toast('<span style="color:#B0D9BE">添加字体颜色</span>',{enableHtml:true})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .demo /deep/ *{
        box-sizing: border-box;
    }
</style>