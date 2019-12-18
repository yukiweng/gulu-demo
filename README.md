# 一个 Vue UI 组件
[![Build Status](https://www.travis-ci.org/yukiweng/gulu-demo.svg?branch=master)](https://www.travis-ci.org/yukiweng/gulu-demo)
## 介绍
一个简单的UI框架
## 开始使用
[使用文档](https://yukiweng.github.io/gulu-demo/)
1. 使用本框架前，请在CSS中开启 border-box   
    IE8及以上浏览器支持该样式

    ```css
    *,*::before,*::after{box-sizing:border-box;} 
    ```
    
2. 安装 yukiGulu
    ```
    npm i --save yuki-gulu
    ```
3. 引入 yuki-gulu
    ```
    import {Button,ButtonGroup,Icon} from 'yuki-gulu'
    export default {
        name: 'App',
        components: {
            'g-button':Button,
            'g-button-group':ButtonGroup,
            'g-icon':Icon
        }
    }
    ```
4. 引入yukiGulu.css
    ```js
    import 'yuki-gulu/dist/yukiGulu.css'
    ```
   
**备注：**  
使用过程若有不妥，请发送邮件至： yukiweng11@163.com 