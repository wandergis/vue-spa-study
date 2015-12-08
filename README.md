# Vue vue-router webpack gulp 学习
## 1.安装(个人喜欢npm的方式)
```
npm install vue --save
npm install vue-router
```

## 2.跟着文档学吧
> [文档地址](http://vuejs.github.io/vue-router/zh-cn/basic.html)

路由替换区域:

`<router-view></router-view>`

子路由:

```
    router.map({
        '/index':{
        component:Index,
        subRoutes:{
            '/':{
                component:{
                    template:'<p>这是默认的嵌套子路由</p>'
                    }
                }
            }
        }
    })
```