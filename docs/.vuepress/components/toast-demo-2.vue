<template>
    <div class="demo">
        <g-button @click="$toast('上方弹出的信息')">上方弹出</g-button>
        <g-button @click="$toast('中间弹出的信息',{position:'middle'})">中间弹出</g-button>
        <g-button @click="$toast('下方弹出的信息',{position:'bottom'})">下方弹出</g-button>
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
        }
    }
</script>

<style lang="scss" scoped>
    .demo /deep/ *{
        box-sizing: border-box;
    }
</style>
