<template>
    <div class="demo">
        <g-popover>
            <template v-slot:content>我是上方的内容</template>
            <g-button>上方弹出</g-button>
        </g-popover>
        <g-popover position="bottom">
            <template v-slot:content>我是下方的内容</template>
            <g-button>下方弹出</g-button>
        </g-popover>
        <g-popover position="left">
            <template v-slot:content>我是左边的内容</template>
            <g-button>左边弹出</g-button>
        </g-popover>
        <g-popover position="right">
            <template v-slot:content>我是右边的内容</template>
            <g-button>右边弹出</g-button>
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