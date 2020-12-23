import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DashboardPlugin from "./material-dashboard"
import Chartist from "chartist";

// plugin setup
Vue.use(DashboardPlugin);

Vue.config.productionTip = false

// global library setup
Vue.prototype.$Chartist = Chartist;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
