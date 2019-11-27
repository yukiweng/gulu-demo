<template>
    <div class="row" :class="gutter && `gutter-${gutter}`">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'g-row',
        props: ['gutter']
    }

</script>

<style lang="scss" scoped>
    .row {
        display: flex;
        height: 100px;
        $class-prefix: gutter-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                & > *:not(:last-child) {
                    margin-right: #{$n}px
                }

            }
        }
    }
</style>