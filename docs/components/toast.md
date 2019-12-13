# Toast 提示框
使用本组件前，请先引入plugin.js
```js
import plugin form '...'
Vue.use(plugin)
this.$toast()
```

### 基础用法
---
`autoClose`默认为5秒后关闭，可自行设置时长  
若无需自动关闭，则设置 `autoClose:false`

**预览：**

<ClientOnly>
<toast-demo-1/>
</ClientOnly>

**代码：**
```
<g-button @click="onClick">上方弹出</g-button>

methods:{
    onClick(){
        this.$toast('3秒后自动关闭',{
            autoClose:3
        })
    }
}
```

### 位置
---
`position`，支持三个位置 `top` `middle` `bottom`，默认`top`  

**预览：**

<ClientOnly>
<toast-demo-2/>
</ClientOnly>

**代码：**
```html
<g-button @click="$toast('上方弹出的信息')">上方弹出</g-button>
<g-button @click="$toast('中间弹出的信息',{position:'middle'})">中间弹出</g-button>
<g-button @click="$toast('下方弹出的信息',{position:'bottom'})">下方弹出</g-button>
```
### 关闭按钮
---
`closeButton`，类型为对象  
接受两个属性：  
按钮文本`text`  
回调函数`callback`  

**预览：**

<ClientOnly>
<toast-demo-3/>
</ClientOnly>

**代码：**
```
<g-button @click="onClick">上方弹出</g-button>

methods:{
    onClick(){
        this.$toast('这是一条消息',{
            closeButton:{
                text:'好的',
                callback:()=>{
                    console.log('你看到消息啦')
                }
            }
        })
    }
}
```
### 支持HTML
---
`enableHtml`，默认为`false`

**预览：**

<ClientOnly>
<toast-demo-4/>
</ClientOnly>

**代码：**
```
<g-button @click="onClick">上方弹出</g-button>
methods:{
    onClick(){
        this.$toast('<span style="color:#B0D9BE">添加字体颜色</span>',{enableHtml:true})
    }
}
```
<style>
.toastWrapper{
z-index:30 !important;
}
</style>