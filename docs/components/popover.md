# Popover 弹出层
### 基础用法
---
`position`，支持四个位置 `top` `bottom` `left` `right`，默认`top`

**预览：**

<ClientOnly>
<popover-demo-1/>
</ClientOnly>

**代码：**
```html
<g-popover>
    <template v-slot:content>我是上方的内容</template>
    <g-button>上方弹出</g-button>
</g-popover>
<g-popover position="bottom">
    <template v-slot:content>我是下方的内容</template>
    <g-button>下方弹出</g-button>
</g-popover>
<g-popover position="left">
    <template v-slot:content>我是左边的内容</template>
    <g-button>左边弹出</g-button>
</g-popover>
<g-popover position="right">
    <template v-slot:content>我是右边的内容</template>
    <g-button>右边弹出</g-button>
</g-popover>
```

### 关闭按钮
---
**预览：**

<ClientOnly>
<popover-demo-2/>
</ClientOnly>

**代码：**
```html
<g-popover>
    <template v-slot:content="{close}">
        <span>我是内容一</span>
        <g-button @click="close">关闭</g-button>
    </template>
    <g-button>点击弹出</g-button>
</g-popover>
```


备注：Vue 2.6版本及以上请用`v-slot`指令，低于2.6版本，请用 `slot` `slot-scope`