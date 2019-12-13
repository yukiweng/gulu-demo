# Button 按钮
--- 
`icon-position` 支持两个方位 `left` `right`，默认`left`  
`loading` 布尔值

**预览：**

<ClientOnly>
<button-demo-1/>
</ClientOnly>

**代码：**
```html
<g-button>按钮</g-button>
<g-button icon="setting">按钮</g-button>
<g-button icon="download" icon-position="right">按钮</g-button>
<g-button loading>按钮</g-button>
```

### 组合按钮
---
**预览：**

<ClientOnly>
<button-demo-2/>
</ClientOnly>

**代码：**
```html
<g-button-group>
    <g-button icon="left">上一页</g-button>
    <g-button>更多</g-button>
    <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
```
