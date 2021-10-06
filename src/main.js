// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Button} from 'mint-ui'  //在App之前引入否则出错
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockServer'  //加载mockServer即可
import loading from './common/imgs/loading.gif'
import './filters'  //加载过滤器



//注册全局组件标签

Vue.component(Button.name, Button)
Vue.use(VueLazyload, {  //内部自定义v-lazy
  loading
})


//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  // components: { App },
  // template: '<App/>'
})
