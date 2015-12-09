/**
 * Created by WangMing on 15/12/7.
 */
var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(VueRouter);//这里一定要注意
//var App = require('./app.vue');
var Home = require('./components/home.vue');
var About=require('./components/about.vue');
var Contact = require('./components/contact.vue');
var Services=require('./components/services.vue');
require('../node_modules/purecss/build/pure-min.css');
require('./assets/css/layouts/side-menu.css');
// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter({
  saveScrollPosition:true
});

// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({
  '/home': {
    component: Home,
    subRoutes: {
      '/': {
        // 当匹配到 /foo 时，这个组件会被渲染到 Foo 组件的 <router-view> 中。
        // 为了简便，这里使用了一个组件的定义
        component: {
          template: '<p>这是主页的默认子路由</p>'
        }
      }
    }
  },
  '/about': {
    component: About
  },
  "/contact": {
    component: Contact
  },
  "/services":{
    component:Services
  }
});
var App = Vue.extend({});
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app');
