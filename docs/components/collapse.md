# Collapse 折叠面板

### 基础用法
---
`g-collapse`添加selected=name，默认选中某面板 

**预览：**

<ClientOnly>
<collapse-demo-1/>
</ClientOnly>

**代码:**
```html
<g-collapse selected="1">
    <g-collapse-item title="标题一" name="1">内容一</g-collapse-item>
    <g-collapse-item title="标题二" name="2">内容二</g-collapse-item>
    <g-collapse-item title="标题三" name="3">内容三</g-collapse-item>
</g-collapse>      
```
### 手风琴模式
---

每次只能展开一个面板，通过 accordion 属性来设置是否以手风琴模式显示。

**预览：**

<ClientOnly>
<collapse-demo-2/>
</ClientOnly>

**代码：**
```html
<g-collapse selected="1" accordion>
    <g-collapse-item title="标题一" name="1">内容一</g-collapse-item>
    <g-collapse-item title="标题二" name="2">内容二</g-collapse-item>
    <g-collapse-item title="标题三" name="3">内容三</g-collapse-item>
</g-collapse>
```

