import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import QuemSouEu from "@/components/QuemSouEu";
import OqueFaco from "@/components/OqueFaco";
import Hobbies from "@/components/Hobbies";

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', component: QuemSouEu},
  {path: '/oquefaco', component: OqueFaco},
  {path: '/hobbies', component: Hobbies}
];

const router = new VueRouter({routes});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})