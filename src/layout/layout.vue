<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
 export default {
     name:'g-layout',
     data(){
         return {
             layoutClass:{
                 hasSider:false,
                 parentIsLayout: false
             }
         }
     },
     mounted() {
         this.$children.forEach((vm)=>{
             if(vm.$options.name=='g-sider'){
                 this.layoutClass.hasSider=true
             }
         })
         if(this.$parent.$options.name=='g-layout'){
             this.layoutClass.parentIsLayout=true
         }

     }
 }
</script>

<style lang="scss" scoped>
.layout{
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &.hasSider{
        flex-direction: row;
    }
    &.parentIsLayout{
        height: 100%;
    }
}
</style>