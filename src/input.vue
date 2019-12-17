<template>
    <div class="wrapper"  :class="{error}">
        <input type="text" :value="value" :disabled="disabled"
               @change="$emit('change',$event.target.value)"
               @input="$emit('input',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)">
        <template v-if="error">
            <g-icon class="error-icon" name="error"></g-icon>
            <span class="error-message">{{error}}</span>
        </template>
    </div>
</template>


<script>
    import Icon from './icon'
export default {
    name:'g-input',
    components:{
        'g-icon':Icon
    },
    props:{
        value:String,
        disabled:{
            type:Boolean,
            default:false
        },
        error:String
    }
}
</script>

<style lang="scss" scoped>
    .wrapper{
        font-size:$font-size;
        display: inline-flex;
        align-items: center;
        >*:not(:last-child){
            margin-right:0.5em
        }
        >input{
            height:$height;
            border:1px solid $border-color;
            border-radius: $border-radius;
            padding:0 8px;
            font-size:inherit;
            &:hover{
                border-color:$border-color-hover;
            }
            &:focus{
                box-shadow: inset 0px 1px 3px $box-shadow-color;
                outline:none
            }
            &[disabled]{
                border-color:#bbb;
                color:#bbb;
                cursor: not-allowed;
            }
            }
        &.error>input{
            color:$red;
            border-color:$red;
        }
        .error-icon{
            fill:$red
        }
        .error-message{
            color:$red
        }
    }

</style>