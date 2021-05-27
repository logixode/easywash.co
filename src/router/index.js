import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Setting from "../views/Setting.vue";
import Onboarding from "../views/Onboarding.vue";
import Rekomendasi from "../views/Rekomendasi.vue";
import Riwayat from "../views/Riwayat.vue";
import Pesan from "../views/Pesan.vue";
import Profil from "../views/Profil.vue";
import DetailPesanan from "../views/DetailPesanan.vue";
import LaundryType from "../views/Laundry/LaundryType.vue";
import MitraInfo from "../views/Laundry/MitraInfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/onboarding",
    name: "Onboarding",
    component: Onboarding,
  },
  {
    path: "/app",
    name: "Home",
    component: Home,
    children: [],
  },
  {
    path: "/app/rekomendasi",
    name: "Rekomendasi",
    component: Rekomendasi,
  },
  {
    path: "/app/riwayat",
    name: "Riwayat",
    component: Riwayat,
  },
  {
    path: "/app/pesan",
    name: "Pesan",
    component: Pesan,
  },
  {
    path: "/app/Profil",
    name: "Profil",
    component: Profil,
  },
  {
    path: "/app/detail_pesanan/:id",
    name: "Detail Pesanan",
    component: DetailPesanan,
  },
  {
    path: "/app/laundry/:type",
    name: "Laundry",
    component: LaundryType,
  },
  {
    path: "/app/mitra/:id",
    name: "Laundry Mitra Info",
    component: MitraInfo,
  },
  {
    path: "/app/setting",
    name: "Setting",
    component: Setting,
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("notFirstTime") || to.name == "Onboarding") next();
  else next("/onboarding");
  // console.log("to: ", to);
  // console.log("from: ", from);
  // console.log("next: ", next);
});

export default router;
