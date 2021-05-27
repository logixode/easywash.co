import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import Vuelidate from "vuelidate";
import VueOffline from "vue-offline";

Vue.use(VueOffline);
Vue.use(Vuelidate);
Vue.mixin({
  methods: {
    changeTitleName() {
      if (this.$route.name != "Home") {
        document.title = "Easywash - " + this.$route.name;
      } else document.title = "Easywash";
    },
  },
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
