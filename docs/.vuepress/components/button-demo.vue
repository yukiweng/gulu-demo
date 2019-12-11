<template>
    <div>
        <g-button>按钮</g-button>
        <g-button icon="setting">按钮</g-button>
        <g-button icon="download" icon-position="right">按钮</g-button>
        <g-button loading>按钮</g-button>
    </div>
</template>

<script>
    import Button from '../../../src/button'
    export default {
        components:{'g-button':Button}
    }
</script>