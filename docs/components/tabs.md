# Tabs 标签页
### 基础用法
---
通过`selected` `name` 设置默认标签页，必选

**预览：**

<ClientOnly>
<tabs-demo-1/>
</ClientOnly>

**代码：**
```html
<g-tabs selected="share" class="demoTabs">
    <g-tabs-head>
        <g-tabs-item name="ask">问答</g-tabs-item>
        <g-tabs-item name="share">分享</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
        <g-tabs-pane name="ask">问答内容</g-tabs-pane>
        <g-tabs-pane name="share">分享内容</g-tabs-pane>
    </g-tabs-body>
</g-tabs>
```
### 位置
---
`direction`，支持两个方向`horizontal` `vertical`，默认`horizontal`

**预览：**

<ClientOnly>
<tabs-demo-2/>
</ClientOnly>

**代码：**

```html
<g-tabs selected="share" direction="vertical" class="demoTabs">
    <g-tabs-head>
        <g-tabs-item name="ask">问答</g-tabs-item>
        <g-tabs-item name="share">分享</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
        <g-tabs-pane name="ask">问答内容</g-tabs-pane>
        <g-tabs-pane name="share">分享内容</g-tabs-pane>
    </g-tabs-body>
</g-tabs>
```

### 添加按钮
---
提供插槽 `actions`

**预览：**

<ClientOnly>
<tabs-demo-3/>
</ClientOnly>

**代码：**

```html
<g-tabs selected="share" class="demoTabs">
    <g-tabs-head>
        <g-tabs-item name="ask">问答</g-tabs-item>
        <g-tabs-item name="share">分享</g-tabs-item>
        <template slot="actions"><g-button>按钮</g-button></template>
    </g-tabs-head>
    <g-tabs-body>
        <g-tabs-pane name="ask">问答内容</g-tabs-pane>
        <g-tabs-pane name="share">分享内容</g-tabs-pane>
    </g-tabs-body>
</g-tabs>
```