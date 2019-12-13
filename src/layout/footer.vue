<template>
    <div class="footer" :style="`height:${height}px`">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'g-footer',
        props:{
            height:{
                type:[String,Number],
                default:100
            }
        }
    }
</script>
