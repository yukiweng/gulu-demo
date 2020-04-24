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
        font-size:14px;
        display: inline-flex;
        align-items: center;
        >*:not(:last-child){
            margin-right:0.5em
        }
        >input{
            height:32px;
            border:1px solid #999;
            border-radius: 4px;
            padding:0 8px;
            font-size:inherit;
            &:hover{
                border-color:#666;
            }
            &:focus{
                box-shadow: inset 0px 1px 3px rgba(0,0,0,0.25);
                outline:none
            }
            &[disabled]{
                border-color:#bbb;
                color:#bbb;
                cursor: not-allowed;
            }
            }
        &.error>input{
            color:#F1453D;
            border-color:#F1453D;
        }
        .error-icon{
            fill:#F1453D
        }
        .error-message{
            color:#F1453D
        }
    }

</style>
