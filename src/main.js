import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SyncClientPlugin from './plugins/twilio'


Vue.config.productionTip = false
Vue.use(SyncClientPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
