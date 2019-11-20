<template>
    <svg class="icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        name: "g-icon",
        props:['name']
    }
</script>

<style scoped>
    .icon{
        width: 1em;
        height: 1em;
    }
</style>