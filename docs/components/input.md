# Input 输入框
### 基础用法
---
**预览：**

<ClientOnly>
<input-demo-1/>
</ClientOnly>

**代码：**
```html
<g-input value="内容"></g-input>
<g-input value="不可输入" disabled></g-input>
<g-input value="内容" error="请重新输入"></g-input>
```

### 双向绑定
---
**预览：**

<ClientOnly>
<input-demo-2/>
</ClientOnly>


**代码：**
```html
data:{
    value:'我的内容'
}

<g-input v-model="value"></g-input>
<div>value是：{{value}}</div>
```
