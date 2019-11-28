<template>
    <div class="row" :class="[gutter && `gutter-${gutter}`,align && `align-${align}` ]" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'g-row',
        props: {
            gutter:[String,Number],
            align:{
                type:String,
                default:'center',
                validator:(value)=>{
                    return value=='left'||value=='right'||value=='center'
                }
            }
        },
        computed:{
            rowStyle() {
                let gutter = this.gutter
                return {marginLeft:-this.gutter/2+'px',marginRight:-this.gutter/2+'px'}
            }
        },
        mounted() {
            this.$children.forEach((vm)=>{
                vm.gutter=this.gutter
            })
        }
    }

</script>

<style lang="scss" scoped>
    .row {
        display: flex;
        flex-wrap: wrap;
        height: 100px;

        &.align-left{
            justify-content: flex-start;
        }
        &.align-right{
            justify-content: flex-end;
        }
        &.align-center{
            justify-content: center;
        }
    }
</style>