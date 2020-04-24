<template>
    <div class="demo">
        <g-button-group>
            <g-button icon="left">上一页</g-button>
            <g-button>更多</g-button>
            <g-button icon="right" icon-position="right">下一页</g-button>
        </g-button-group>
    </div>
</template>

<script>
    import Button from '../../../src/button/button'
    import ButtonGroup from '../../../src/button/button-group'
    export default {
        components:{
            'g-button':Button,
            'g-button-group':ButtonGroup
        },
    }
</script>

<style lang="scss" scoped>
    .demo /deep/ *{
        box-sizing: border-box;
    }
</style>
