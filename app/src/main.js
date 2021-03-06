import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import Services from './api/services'

import Antd from 'ant-design-vue';
import './assets/fluance-theme.css'

Vue.config.productionTip = false
Vue.prototype.$service = Services
Vue.prototype.$http = axios

Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
