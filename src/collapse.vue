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
    $border-color:#666;
    $border-radius:4px;
    .collapse{
        border:1px solid $border-color;
        border-radius: $border-radius;
    }

</style>