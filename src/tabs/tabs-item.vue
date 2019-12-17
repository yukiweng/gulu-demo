<template>
    <div class="tabsItem" @click="clickItem" :class="classes" :data-name="name">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'g-tabs-item',
        inject:['eventBus'],
        data(){
            return {active:false}
        },
        props:{
            name:{
                type:[String,Number],
                required:true
            }
        },
        created() {
                this.eventBus && this.eventBus.$on('update:selected', (name, vm) => {
                    this.active = this.name === name;
                })
        },
        computed:{
            classes(){
                return {active:this.active}
            }
        },
        methods:{
            clickItem(){
                this.eventBus && this.eventBus.$emit('update:selected',this.name,this)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabsItem{
        height: 100%;
        display: flex;
        align-items: center;
        padding:0.5em 1em;
        cursor: pointer;
        &.active{
            color:$blue;
        }
    }
</style>