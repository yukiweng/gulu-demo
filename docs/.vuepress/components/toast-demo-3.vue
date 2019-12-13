<template>
    <div class="demo">
        <g-button @click="onClick">上方弹出</g-button>
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
        },
        methods:{
            onClick(){
                this.$toast('这是一条消息',{
                    closeButton:{
                        text:'好的',
                        callback:()=>{
                            console.log('你看到消息啦')
                        }
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .demo /deep/ *{
        box-sizing: border-box;
    }
</style>