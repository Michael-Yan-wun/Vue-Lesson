import Vue from "vue";
import App from "./App";
import router from "./router/router.js";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios)
Vue.prototype.$ajax = axios

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

