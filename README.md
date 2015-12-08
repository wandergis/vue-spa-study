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

## 路由对象
路由对象暴露了以下几个属性:
1. `$route.path`,字符串,当前路由对象的路径,如:`"/foo/bar"`
2. `$route.params`,对象,包含路由中动态片段和全匹配片段的键值对
3. `$route.query`,对象,包含路由中查询参数的键值对,例:`/foo?user=1`会得到`$route.query.user=1`
4. `$route.router`,路由规则所属的路由器及其所属的组件
5. `$route.matched`,数组:包含当前匹配路径中所包含的所有片段所对应的配置参数对象
6. `$route.name`,当前路径的名字

*另外在路由设置对象中自定义的其他字段也会最终拷贝到路由对象上*

可以直接在组件的模板中使用`$route`,如
```
    <div>
        <p>当前路径: {{$route.path}}</p>
        <p>当前路由参数: {{$route.params | json}}</p>
    </div>
   ```