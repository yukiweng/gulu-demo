<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "g-collapse",
        props:{
            selected:{
                type:[String,Number]
            },
            accordion:{
                type:Boolean,
                default:false
            }
        },
        mounted() {
            this.$children.forEach((vm)=>{
                vm.accordion=this.accordion
                vm.selected=this.selected
            })
        }
    }
</script>

<style lang="scss" scoped>


</style>