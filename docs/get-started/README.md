# 快速上手
---
1. 使用本框架前，请在CSS中开启 border-box，
    IE8及以上浏览器支持该样式

    ```css
    *,*::before, *::after{box-sizing:border-box;} 
    ```
    
2. 引入组件
    ```js
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
3. 引入 css 样式
    ```js
    import 'yuki-gulu/dist/yuki-gulu.css'
    ```
   
**备注：**  
使用过程若有不妥，请发送邮件至： yukiweng11@163.com 
