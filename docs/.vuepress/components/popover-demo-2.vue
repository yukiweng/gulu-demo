<template>
    <div class="demo">
        <g-popover>
            <template v-slot:content="{close}">
                <span>我是内容一</span>
                <g-button @click="close">关闭</g-button>
            </template>
            <g-button>点击弹出</g-button>
        </g-popover>
    </div>
</template>

<script>
    import Popover from '../../../src/popover'
    import Button from '../../../src/button/button'
    export default {
        components:{
            'g-popover':Popover,
            'g-button':Button
        }
    }
</script>

<style lang="scss" scoped>
    .demo /deep/ *{
        box-sizing: border-box;
    }
</style>