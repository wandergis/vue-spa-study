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

## 3.路由对象
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

### 路由匹配,我理解是restful

```
    route.map({
        '/user/:username':{
            component:{
                template:"<p>用户名是{{$route.params.username}}</p>"
            }
        }
    })
```

### 具名路径

给一条路径加上一个名字能够让我们更方便地进行路径的跳转

## 4.路由选项

### `hashbang`

默认值`true`,会以`#!`开头

### `history`

默认`false`,`true`情况下利用H5的利用 `history.pushState()` 和 `history.replaceState()` 来管理浏览历史记录

### `abstract`

默认 `false`,利用一个不依赖于浏览器的浏览历史虚拟管理后端,虚拟模式在测试或者实际的url并不重要的时候,非常有用,如Electron 或者 Cordova 应用。在非浏览器模式下，路由器同样会退化为抽象模式。

### `root`

默认`null`,只在H5 history模式下可用

### `linkActiveClass`

默认值:`v-link-active` 配置当`v-link`元素匹配的路径时候需要添加到元素上的class

### `saveScrollPosition`

默认值:`false` 只在h5 history模式下可用,当用户点击后退按钮的时候,借助H5 history中的`popstate`事件对应的state来重置页面的滚动位置.

### `transitionOnLoad`

默认值:`false` 初次加载时候是否对`<route-view></route-view>`处理场景切换效果.

### `suppressTransitionError`

默认值:`false`,在切换钩子函数中发生异常不吞掉