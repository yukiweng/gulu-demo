<template>
    <div class="col" :class="[colClass]" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
    let validator= (value)=>{
        let keys = Object.keys(value)
        let valid = true
        keys.forEach((key) => {
            if (['span', 'offset'].indexOf(key)<0) {
                valid = false
            }
        })
        return valid
    }

    export default {
        name: 'g-col',
        props: {
            span: [String,Number],
            offset:[String,Number],
            ipad:{
                type: Object,
                validator
            },
            pc: {
                type: Object,
                validator
            },
            widePc:{
                type: Object,
                validator
            }
        },
        data(){
            return {gutter:0}
        },
        methods:{
          createClasses(object={},str=''){
              let array=[]
              if(object.span){
                  array.push(`col-${str}${object.span}`)
              }else if(object.span==0){
                  array.push(`col-${str}0`)
              }
              if(object.offset){
                  array.push(`offset-${str}${object.offset}`)
              }else if(object.offset==0){
                  array.push(`offset-${str}0`)
              }
              return array
          }
        },
        computed: {
            colClass() {
                let {span,offset,ipad,pc,widePc} = this
                let createClasses=this.createClasses
                return [
                    createClasses({span,offset}),
                    createClasses(ipad,'ipad-'),
                    createClasses(pc,'pc-'),
                    createClasses(widePc,'wide-pc-')
                ]
            },
            colStyle () {
                return {
                   paddingLeft: this.gutter / 2 + 'px',
                   paddingRight: this.gutter / 2 + 'px'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col {
        $class-prefix: col-;
        @for $n from 0 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 0 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
        @media(min-width: 768px) {
            $class-prefix: col-ipad-;
            @for $n from 0 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: offset-ipad-;
            @for $n from 0 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media(min-width: 992px) {
            $class-prefix: col-pc-;
            @for $n from 0 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: offset-pc-;
            @for $n from 0 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media(min-width: 1200px) {
            $class-prefix: col-wide-pc-;
            @for $n from 0 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: offset-wide-pc-;
            @for $n from 0 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
    }
</style>