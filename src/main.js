import Vue from 'vue'
import App from './App.vue'
import VueNativeSock from 'vue-native-websocket'

Vue.use(VueNativeSock, 'wss://qh8poob9gf.execute-api.ap-northeast-1.amazonaws.com/Prod',{
  format: 'json'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
