<template>
    <div class="row" :class="[gutter && `gutter-${gutter}`,align && `align-${align}` ]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'g-row',
        props: {
            'gutter':[String,Number],
            'align':{
                type:String,
                default:'center',
                validator:(value)=>{
                    return value=='left'||value=='right'||value=='center'
                }
            }
        }
    }

</script>

<style lang="scss" scoped>
    .row {
        display: flex;
        height: 100px;
        background: goldenrod;
        $class-prefix: gutter-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                & > *:not(:last-child) {
                    margin-right: #{$n}px
                }

            }
        }
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