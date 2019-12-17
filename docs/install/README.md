# 安装
---
1. 安装 yuki-gulu-ui
    ```
    npm i --save yuki-gulu
    ```
2. 引入 yuki-gulu
    ```
    import {Button,ButtonGroup} from 'yuki-gulu'
    export default {
        name: 'App',
        components: {
            'g-button':Button,
            'g-button-group':ButtonGroup,
        }
    }
    ```