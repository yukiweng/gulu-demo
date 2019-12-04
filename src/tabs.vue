<template>
    <div class="tabs" :class="position">
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
            position:{
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
                if(vm.$options.name=='g-tabs-head'){
                    vm.position=this.position
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