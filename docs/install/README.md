# 安装
---
1. 安装 yuki-gulu-ui
    ```
    npm i --save yuki-gulu-ui
    ```
2. 引入 yuki-gulu-ui
    ```
    import {Button,ButtonGroup} from 'yuki-gulu-ui'
    export default {
        name: 'App',
        components: {
            'g-button':Button,
            'g-button-group':ButtonGroup,
        }
    }
    ```