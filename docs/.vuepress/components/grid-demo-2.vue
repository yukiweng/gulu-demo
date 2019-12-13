<template>
    <div class="demo">
        <g-row class="demoRow" gutter=20>
            <g-col span=8><div  class="demoCol">8</div></g-col>
            <g-col span=8><div  class="demoCol">8</div></g-col>
            <g-col span=8><div  class="demoCol">8</div></g-col>
        </g-row>
        <g-row class="demoRow" gutter=10>
            <g-col span=6><div class="demoCol">6</div></g-col>
            <g-col span=6><div class="demoCol">6</div></g-col>
            <g-col span=6><div class="demoCol">6</div></g-col>
            <g-col span=6><div class="demoCol">6</div></g-col>
        </g-row>
    </div>
</template>

<script>
    import Row from '../../../src/grid/row'
    import Col from '../../../src/grid/col'
    export default {
        components:{
            'g-row':Row,
            'g-col':Col
        }
    }
</script>

<style lang="scss" scoped>
    .demo /deep/ *{
        box-sizing: border-box;
    }
</style>