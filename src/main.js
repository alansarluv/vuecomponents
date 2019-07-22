import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import { routes } from './routes'

import VueResource from 'vue-resource'

import store from './store/store'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueResource)
Vue.http.options.root = 'https://vuejs-stock-trader-669f1.firebaseio.com/'

Vue.filter ('currency', (value) => {
  return 'Rp. ' + value.toLocaleString()
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
