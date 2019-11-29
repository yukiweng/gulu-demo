<template>
    <div class="toast">
        <slot></slot>
    </div>

</template>

<script>
export default {
    name:'g-toast'
}
</script>

<style lang="scss" scoped>
    $font-size:14px;
    $toast-bg:rgba(0,0,0,0.6);
    $toast-box-shadow:0px 0px 3px 0px rgba(0,0,0,0.5);
    $toast-color:white;
.toast{
    font-size:$font-size;
    background:$toast-bg;
    box-shadow:  $toast-box-shadow;
    color:$toast-color;
    border-radius:4px;
    padding:8px 12px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
}
</style>