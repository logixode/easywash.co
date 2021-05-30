import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import Vuelidate from "vuelidate";
import VueOffline from "vue-offline";
import "./firebase";
// import { db } from "./firebase";
import { auth } from "./firebase";

Vue.use(VueOffline);
Vue.use(Vuelidate);
Vue.mixin({
  methods: {
    changeTitleName() {
      if (this.$route.name != "Home") {
        document.title = "Easywash - " + this.$route.name;
      } else document.title = "Easywash";
    },
    formatRupiah(value) {
      let number_string = value
          .toString()
          .replace(/[^,\d]/g, "")
          .toString(),
        split = number_string.split(","),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

      // tambahkan titik jika yang di input sudah menjadi angka ribuan
      if (ribuan) {
        let separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }

      rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
      return rupiah ? "Rp. " + rupiah : "";
    },
  },
});
Vue.config.productionTip = false;

auth().onAuthStateChanged((firebaseUser) => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
    mounted() {
      if (firebaseUser) {
        store.dispatch("autoSignIn", firebaseUser);
      }
    },
  }).$mount("#app");
});
