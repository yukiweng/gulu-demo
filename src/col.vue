<template>
    <div class="col">
        <slot></slot>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
    .col {
        border: 1px solid green;
        background: grey;
        width: 50%;
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }

    }
</style>