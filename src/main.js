import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Pendants from './Pendants.vue'
import Rings from './Rings.vue'
import Earrings from './Earrings.vue'
import Buy from './Buy.vue'


Vue.use(VueRouter);

const routes = [
  { path: '/pendants', component: Pendants },
  { path: '/rings', component: Rings },
  { path: '/earrings', component: Earrings },
  { path: '/buy', component: Buy }

];
const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
