<template>
    <div class="popover" ref="popover">
        <div class="contentWrapper" v-if="visible" ref="contentWrapper" :class=`position-${position}`>
            <slot name="content" :close="close"></slot>
        </div>
        <span class="triggerWrapper" ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>

</template>

<script>
    export default {
        name: "g-popover",
        data() {
            return {
                visible: false
            }
        },
        props:{
          position:{
              type:String,
              default:'top',
              validator(value){
                  return ['top','bottom','left','right'].indexOf(value)>=0
              }
          },
            trigger:{
              type:String,
                default: 'click',
                validator(value) {
                    return ['click','hover'].indexOf(value)>=0
                }
            }
        },
        mounted(){
          if(this.trigger==='click'){
              this.$refs.popover.addEventListener('click',this.onClick)
          }else{
              this.$refs.popover.addEventListener('mouseenter',this.open)
              this.$refs.popover.addEventListener('mouseleave',this.close)
          }
        },
        destroyed(){
            this.$refs.popover.removeEventListener('click',this.onClick)
            this.$refs.popover.removeEventListener('mouseenter',this.open)
            this.$refs.popover.removeEventListener('mouseleave',this.close)
        },
        methods: {
            positionContent() {
                let {contentWrapper,triggerWrapper}=this.$refs
                document.body.appendChild(contentWrapper)
                let {width,height,top, left} = triggerWrapper.getBoundingClientRect()
                let {height:height2}=contentWrapper.getBoundingClientRect()
                let positions={
                    top:{
                        top:top + window.pageYOffset,
                        left:left + window.pageXOffset
                    },
                    bottom:{
                        top:top + height + window.pageYOffset,
                        left:left + window.pageXOffset
                    },
                    left:{
                        top:top+window.pageYOffset+(height-height2)/2,
                        left:left + window.pageXOffset
                    },
                    right:{
                        top:top+window.pageYOffset+(height-height2)/2,
                        left:left + width + window.pageXOffset
                    }
                }
                contentWrapper.style.top=positions[this.position].top+'px'
                contentWrapper.style.left=positions[this.position].left+'px'
            },
            onClickDocument(e) {
                if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
                ) {return}
                if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
                ) {return}
                this.close()
            },
            open() {
                this.visible=true
                setTimeout(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                }, 0)
            },
            close() {
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
            },
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close()
                    } else {
                        this.open()
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
$border-color:#333;
$border-radius:4px;
    .contentWrapper {
        border: 1px solid $border-color;
        border-radius: $border-radius;
        max-width: 20em;
        padding: 0.5em 1em;
        position: absolute;
        word-break: break-all;
        filter:drop-shadow(0 1px 1px rgba(0,0,0,0.5));
        background: white;
        &::before,&::after{
            content: '';
            border:10px solid transparent;
            display: block;
            position: absolute;
        }
        &.position-top{
            transform: translateY(-100%);
            margin-top:-10px;
            &::before,&::after{
                left: 10px;
                border-bottom: none;
            }
            &::before{
                border-top-color:$border-color;
                top: 100%;
            }
            &::after{
                border-top-color:white;
                top: calc(100% - 1px);
            }
        }
        &.position-bottom{
            margin-top:10px;
            &::before,&::after{
                left: 10px;
                border-top: none;
            }
            &::before{
                border-bottom-color:$border-color;
                bottom: 100%;
            }
            &::after{
                border-bottom-color:white;
                bottom: calc(100% - 1px);
            }
        }
        &.position-left{
            transform: translateX(-100%);
            margin-left: -10px;
            &::before,&::after{
                border-right: none;
                transform: translateY(-50%);
                top:50%;
            }
            &::before{
                border-left-color:$border-color;
                left: 100%;
            }
            &::after{
                border-left-color:white;
                left: calc(100% - 1px);
            }
        }
        &.position-right{
            margin-left: 10px;
            &::before,&::after{
                border-left: none;
                transform: translateY(-50%);
                top:50%;
            }
            &::before{
                border-right-color:$border-color;
                right: 100%;
            }
            &::after{
                border-right-color:white;
                right: calc(100% - 1px);
            }
        }
    }

    .popover {
        display: inline-block;
        > .triggerWrapper {
            position: relative;
            display: inline-block;
        }
    }

</style>