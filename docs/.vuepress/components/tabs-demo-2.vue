<template>
    <div class="demo">
        <g-tabs selected="share" direction="vertical" class="demoTabs">
            <g-tabs-head>
                <g-tabs-item name="ask">问答</g-tabs-item>
                <g-tabs-item name="share">分享</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="ask">问答内容</g-tabs-pane>
                <g-tabs-pane name="share">分享内容</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
    </div>
</template>

<script>
    import Tabs from '../../../src/tabs/tabs'
    import TabsHead from '../../../src/tabs/tabs-head'
    import TabsItem from '../../../src/tabs/tabs-item'
    import TabsBody from '../../../src/tabs/tabs-body'
    import TabsPane from '../../../src/tabs/tabs-pane'
    export default {
        components:{
            'g-tabs':Tabs,
            'g-tabs-head':TabsHead,
            'g-tabs-item':TabsItem,
            'g-tabs-body':TabsBody,
            'g-tabs-pane':TabsPane
        }
    }
</script>

<style lang="scss" scoped>
    .demoTabs{
        height:200px;
        border:1px solid #999;
        border-radius: 4px;
    }
    .demo /deep/ *{
        box-sizing: border-box;

    }
</style>