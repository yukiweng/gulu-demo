# 一个 Vue UI 组件
[![Build Status](https://www.travis-ci.org/yukiweng/gulu-demo.svg?branch=master)](https://www.travis-ci.org/yukiweng/gulu-demo)
##介绍
一个简单的UI框架，仿 轱辘UI
## 开始使用
1. 添加CSS样式
    
    使用本框架前，请在CSS中开启 border-box   
    IE8及以上浏览器支持都该样式
    ```
    *,*::before,*::after{box-sizing:border-box;}
    ```
    设置默认css样式，IE15及以上浏览器支持该样式
    ```
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --color: #333;
        --button-bg: #fff;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --border-color: #999;
        --border-hover-color: #666;
    }
    ```
2. 安装 yuki-demo
    ```
    npm i --save yuki-demo
    ```
3. 引入 yuki-demo
    ```
    import {Button,ButtonGroup,Icon} from 'yuki-demo'
    export default {
        name: 'App',
        components: {
            'g-button':Button,
            'g-button-group':ButtonGroup,
            'g-icon':Icon
        }
    }
    ```
## 联系方式
邮箱：yukiweng11@163.com