<template>
    <div class="tabsPane" :class="classes" v-if="active" :data-name="name">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'g-tabs-pane',
        inject:['eventBus'],
        data(){return{active:false}},
        props:{
            name:{
                type:[String,Number],
                required:true
            }
        },
        created() {
            this.eventBus && this.eventBus.$on('update:selected',(name)=>{
                this.active = this.name === name;
            })
        },
        computed:{
            classes(){
                return {active:this.active}
            }
        }
    }
</script>

<style lang="scss" scoped>
.tabsPane{
    padding:0.5em 1em;
    &.active{
    }
}
</style>