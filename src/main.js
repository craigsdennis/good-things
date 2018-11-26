import Vue from 'vue'
import App from './App.vue'
import router from './router'
import syncClient from './syncClient'

Vue.config.productionTip = false

new Vue({
  router,
  syncClient,
  render: h => h(App)
}).$mount('#app')
