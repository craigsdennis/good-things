import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SyncClientPlugin from './plugins/twilio'

Vue.config.productionTip = false
Vue.use(SyncClientPlugin, {
  SYNC_TOKEN_URL: 'https://quartz-ant-5504.twil.io/sync-token'}
);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
