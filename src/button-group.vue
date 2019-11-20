<template>
    <div class="buttonGroup">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "button-group",
        mounted(){
            for (let node of this.$el.children){
                let name=node.nodeName.toLowerCase()
                if(name!=='button'){
                    console.log('warn:g-button-group的子元素只允许button类型，你输入的类型是'+name)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
 .buttonGroup{
     display: inline-flex;
     vertical-align: middle;
     >.g-button {
         border-radius: 0;
         &:hover {
             z-index: 1
         }
         &:not(:first-child){
             margin-left: -1px;
         }
         &:first-child{
             border-top-left-radius: 4px;
             border-bottom-left-radius: 4px;
         }
         &:last-child{
             border-top-right-radius: 4px;
             border-bottom-right-radius: 4px;
         }
     }
 }
</style>