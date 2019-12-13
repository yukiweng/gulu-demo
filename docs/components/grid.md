# Grid 网格
### 24格网格
---
`<g-col>`添加span

**预览：**
<ClientOnly>
<grid-demo-1/>
</ClientOnly>

**代码：**
```html
<g-row class="demoRow">
    <g-col span=8><div  class="demoCol">8</div></g-col>
    <g-col span=8><div  class="demoCol">8</div></g-col>
    <g-col span=8><div  class="demoCol">8</div></g-col>
</g-row>
<g-row class="demoRow">
    <g-col span=6><div class="demoCol">6</div></g-col>
    <g-col span=6><div class="demoCol">6</div></g-col>
    <g-col span=6><div class="demoCol">6</div></g-col>
    <g-col span=6><div class="demoCol">6</div></g-col>
</g-row>
<g-row class="demoRow">
    <g-col span=4><div class="demoCol">4</div></g-col>
    <g-col span=4><div class="demoCol">4</div></g-col>
    <g-col span=4><div class="demoCol">4</div></g-col>
    <g-col span=4><div class="demoCol">4</div></g-col>
    <g-col span=4><div class="demoCol">4</div></g-col>
    <g-col span=4><div class="demoCol">4</div></g-col>
</g-row>
<g-row class="demoRow">
    <g-col span=2><div class="demoCol">2</div></g-col>
    <g-col span=2><div class="demoCol">2</div></g-col>
    <g-col span=2><div class="demoCol">2</div></g-col>
    <g-col span=2><div class="demoCol">2</div></g-col>
    <g-col span=2><div class="demoCol">2</div></g-col>
    <g-col span=2><div class="demoCol">2</div></g-col>
    <g-col span=2><div class="demoCol">2</div></g-col>
    <g-col span=2><div class="demoCol">2</div></g-col>
    <g-col span=2><div class="demoCol">2</div></g-col>
    <g-col span=2><div class="demoCol">2</div></g-col>
    <g-col span=2><div class="demoCol">2</div></g-col>
    <g-col span=2><div class="demoCol">2</div></g-col>
</g-row>
```

### 设置gutter
---
`<g-row>`添加gutter，单位为px

**预览：**
<ClientOnly>
<grid-demo-2/>
</ClientOnly>

**代码：**
```html
<g-row class="demoRow" gutter=20>
    <g-col span=8><div  class="demoCol">8</div></g-col>
    <g-col span=8><div  class="demoCol">8</div></g-col>
    <g-col span=8><div  class="demoCol">8</div></g-col>
</g-row>
<g-row class="demoRow" gutter=10>
    <g-col span=6><div class="demoCol">6</div></g-col>
    <g-col span=6><div class="demoCol">6</div></g-col>
    <g-col span=6><div class="demoCol">6</div></g-col>
    <g-col span=6><div class="demoCol">6</div></g-col>
</g-row>
```
### 设置空隙
---
`<g-col>`添加offset，单位与span相同

**预览：**
<ClientOnly>
<grid-demo-3/>
</ClientOnly>

**代码：**
```html
<g-row class="demoRow">
    <g-col span=8><div  class="demoCol">8</div></g-col>
    <g-col span=8 offset=8><div  class="demoCol">8</div></g-col>
</g-row>
<g-row class="demoRow">
    <g-col span=6><div class="demoCol">6</div></g-col>
    <g-col span=6 offset=2><div class="demoCol">6</div></g-col>
    <g-col span=6 offset=4><div class="demoCol">6</div></g-col>
</g-row>
```
### 自适应
---
默认手机端，支持iPad/PC/wide-PC  
绑定iPad/PC/wide-PC时，若所传对象中不包含offset属性，则沿用默认offset

**预览：**
<ClientOnly>
<grid-demo-4/>
</ClientOnly>

**代码：**
```html
<g-row class="demoRow">
    <g-col span=8 :pc={span:10}><div  class="demoCol">8</div></g-col>
    <g-col span=8 offset=8 :pc={span:12,offset:2}><div  class="demoCol">8</div></g-col>
</g-row>
<g-row class="demoRow">
    <g-col span=6 :ipad={span:6}><div class="demoCol">6</div></g-col>
    <g-col span=6 offset=2 :ipad={span:4}><div class="demoCol">6</div></g-col>
    <g-col span=6 offset=4 :ipad={span:12,offset:0}><div class="demoCol">6</div></g-col>
</g-row>
```

<style>
.demoRow{
margin:10px 0;
box-sizing: border-box;
}
.demoCol{
    background: lightgrey;
    border:1px solid #999;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 10px;
    box-sizing: border-box;
}
</style>