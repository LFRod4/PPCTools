import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./../node_modules/bulma/css/bulma.css";

import VueAnalytics from "vue-analytics";

Vue.use(VueAnalytics, {
  id: "UA-162193702-2",
  router
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
