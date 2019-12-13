<template>
    <div class="demo">
        <g-collapse selected="1">
            <g-collapse-item title="标题一" name="1">内容一</g-collapse-item>
            <g-collapse-item title="标题二" name="2">内容二</g-collapse-item>
            <g-collapse-item title="标题三" name="3">内容三</g-collapse-item>
        </g-collapse>
    </div>
</template>

<script>
    import Collapse from "../../../src/collapse/collapse";
    import CollapseItem from '../../../src/collapse/collapse-item'
    export default {
        components:{
            'g-collapse':Collapse,
            'g-collapse-item':CollapseItem
        }
    }
</script>

<style lang="scss" scoped>
    .demo /deep/ *{
        box-sizing: border-box;
    }
</style>