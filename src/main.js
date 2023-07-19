import Vue from 'vue'
import App from './App.vue'

import 'swiper/css/swiper.css'

// 三级联动组件
import TypeNav from '@/components/TypeNav/index.vue'
Vue.component(TypeNav.name, TypeNav)

import router from './router'
Vue.config.productionTip = false

import store from './store'

import '@/mock/mockServe.js'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
