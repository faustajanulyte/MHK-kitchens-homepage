import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueCarousel from '@chenfengyuan/vue-carousel';
import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'

Vue.use(VueRouter)
Vue.component(VueCarousel.name, VueCarousel);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
