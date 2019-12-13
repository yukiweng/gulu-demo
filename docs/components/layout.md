# Layout 布局
### 布局一
---
**预览：**

<ClientOnly>
<layout-demo-1/>
</ClientOnly>

**代码：**
```html
<g-layout class="layoutDemo">
    <g-header class="headerDemo">header</g-header>
    <g-content class="contentDemo">content</g-content>
    <g-footer class="footerDemo">footer</g-footer>
</g-layout>
```

### 布局二
---
**预览：**

<ClientOnly>
<layout-demo-2/>
</ClientOnly>

**代码：**
```html
<g-layout class="layoutDemo">
    <g-header class="headerDemo">header</g-header>
    <g-layout>
        <g-sider class="siderDemo">sider</g-sider>
        <g-content class="contentDemo">content</g-content>
    </g-layout>
<g-footer class="footerDemo">footer</g-footer>
```

### 布局三
---
**预览：**

<ClientOnly>
<layout-demo-3/>
</ClientOnly>

**代码：**
```html
<g-layout class="layoutDemo">
    <g-sider class="siderDemo">sider</g-sider>
    <g-layout>
        <g-header class="headerDemo">header</g-header>
        <g-content class="contentDemo">content</g-content>
        <g-footer class="footerDemo">footer</g-footer>
    </g-layout>
</g-layout>
```
