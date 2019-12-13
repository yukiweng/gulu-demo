<template>
    <div class="demo">
        <g-input value="内容"></g-input>
        <g-input value="不可输入" disabled></g-input>
        <g-input value="内容" error="请重新输入"></g-input>
    </div>
</template>

<script>
    import Input from '../../../src/input'
    export default {
        components:{
            'g-input':Input
        }
    }
</script>

<style lang="scss" scoped>
    .demo /deep/ *{
        box-sizing: border-box;
    }
</style>