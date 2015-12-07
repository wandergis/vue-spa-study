/**
 * Created by WangMing on 15/12/7.
 */
var Vue = require('vue');
var App = require('./app.vue');

new Vue({
  el: 'body',
  components: {
    app: App
  }
});