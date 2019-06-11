import Vue from 'vue'
import App from './App'
import router from './router'

// 引入共用css
import './assets/base.css';
// //引入动画组件
// import animate from 'animate.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // animate,
  render: h => h(App)
})
