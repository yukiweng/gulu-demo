<template>
    <div class="tabs" :class="direction">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name:'g-tabs',
        props:{
            selected:{
                type:String,
                required:true
            },
            direction:{
                type:String,
                default:'horizontal',
                validator(value){
                    return ['horizontal','vertical'].indexOf(value)>=0
                }
            }
        },
        data(){return{eventBus:new Vue()}},
        mounted() {
            this.$children.forEach((vm)=>{
                if(vm.$options.name!=='g-tabs-head'&&vm.$options.name!=='g-tabs-body'){
                    console&&console.warn&&console.warn('g-tabs的子元素应该是 g-tabs-head 或 g-tabs-body')
                }
                if(vm.$options.name=='g-tabs-head'){
                    vm.direction=this.direction
                    vm.$children.forEach((childVm)=>{
                        if(childVm.$options.name=='g-tabs-item'&&childVm.name==this.selected){
                            this.eventBus.$emit('update:selected',this.selected,childVm)
                        }
                    })
                }
            })
        },
        provide(){
            return {eventBus:this.eventBus}
        }
    }
</script>

<style lang="scss" scoped>
    .tabs{
        display: flex;
        &.horizontal{
            flex-direction: column;
        }
        &.vertical{
            flex-direction: row;
        }
    }
</style>