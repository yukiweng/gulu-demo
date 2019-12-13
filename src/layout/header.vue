<template>
    <div class="header" :style="`height:${height}px`">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'g-header',
        props:{
            height:{
                type:[String,Number],
                default:100
            }
        }
    }
</script>
