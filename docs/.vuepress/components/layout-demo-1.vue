<template>
    <div class="demo">
            <g-layout class="layoutDemo">
                <g-header class="headerDemo">header</g-header>
                <g-content class="contentDemo">content</g-content>
                <g-footer class="footerDemo">footer</g-footer>
            </g-layout>
    </div>
</template>

<script>
    import Layout from '../../../src/layout/layout.vue'
    import Header from '../../../src/layout/header.vue'
    import Content from '../../../src/layout/content.vue'
    import Footer from '../../../src/layout/footer.vue'
    import Sider from '../../../src/layout/sider.vue'
    export default {
        components:{
            'g-layout':Layout,
            'g-header':Header,
            'g-content':Content,
            'g-footer':Footer,
            'g-sider':Sider}
    }
</script>

<style lang="scss" scoped>
    .demo /deep/ *{
        box-sizing: border-box;
    }
    .layoutDemo{
        height: 400px;
    }
    .headerDemo,.footerDemo{
        background: #C1CBDA;
    }
    .contentDemo{
        background: #DCE0EA;
    }
</style>