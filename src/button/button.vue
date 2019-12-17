<template>
    <button class="g-button" :class="[`icon-${iconPosition}`]" @click="$emit('click')">
        <g-icon v-if="loading" class="icon loading" name="loading"></g-icon>
        <g-icon class="icon" v-if="icon&&!loading" :name="icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>

    import Icon from '../icon'
    export default {
        components:{
            'g-icon':Icon
        },
        name: 'g-button',
        props: {
            'icon':String,
            'iconPosition':{
                type:String,
                default:'left',
                validator: function (value) {
                    return !(value !== 'left' && value !== 'right');
                }
            },
            'loading':Boolean
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes spin {
        0%{tranform:rotate(0deg)}
         100%{transform:rotate(360deg)}
    }
    .g-button {
        height: $button-height;
        font-size: $font-size;
        padding: 0 1em;
        color: $color;
        background: $button-bg;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        display:inline-flex;
        justify-content: center;
        align-items:center;
        vertical-align: middle;

        &:hover {
            border-color: $border-color-hover;
        } ;

        &:active {
            background: $button-active-bg;
        };
        >.icon{order:1;margin-right: 0.5em};
        > .content{order:2};
        &.icon-right{
            .content{order:1};
            .icon{order:2;margin: 0 0 0 0.5em}
        }
    }
    .loading{
        animation: spin 1s infinite linear;
    }
</style>