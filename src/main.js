import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { routes } from './routes'
import VueRouter from 'vue-router'
import VueApexCharts from 'vue-apexcharts'
import {store} from './store/store'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
const router =  new VueRouter({routes})
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
