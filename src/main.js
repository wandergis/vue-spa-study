/**
 * Created by WangMing on 15/12/7.
 */
var Vue = require('vue');
var App = require('./app.vue');
var Profile=require('./components/profile.vue');
var Manager=require('./components/manager.vue');
new Vue({
  el: 'body',
  components: {
    app: App,
    profile:Profile,
    manager:Manager
  }
});