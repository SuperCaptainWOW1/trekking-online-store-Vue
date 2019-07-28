import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import vueSmoothScroll from "vue-smooth-scroll";

Vue.use(vueSmoothScroll);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
