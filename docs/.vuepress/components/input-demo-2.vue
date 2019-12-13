<template>
    <div class="demo">
        <g-input v-model="value"></g-input>
        <div>value是：{{value}}</div>
    </div>
</template>

<script>
    import Input from '../../../src/input'
    export default{
        components:{
            'g-input':Input
        },
        data(){
            return{value:'我的内容'}
        }
    }
</script>

<style lang="scss" scoped>
    .demo /deep/ *{
        box-sizing: border-box;
    }
</style>