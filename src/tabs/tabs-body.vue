<template>
    <div class="tabsBody">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'g-tabs-body',
        inject:['eventBus']
    }
</script>
