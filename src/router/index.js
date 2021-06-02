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
import { auth } from "../firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      withoutAuth: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      withoutAuth: true,
    },
  },
  {
    path: "/onboarding",
    name: "Onboarding",
    component: Onboarding,
    meta: {
      withoutAuth: true,
    },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      withoutAuth: true,
    },
  },
  {
    path: "/rekomendasi",
    name: "Rekomendasi",
    component: Rekomendasi,
    meta: {
      withoutAuth: true,
    },
  },
  {
    path: "/riwayat",
    name: "Riwayat",
    component: Riwayat,
  },
  {
    path: "/pesan",
    name: "Pesan",
    component: Pesan,
  },
  {
    path: "/profil",
    name: "Profil",
    component: Profil,
  },
  {
    path: "/detail_pesanan/:id",
    name: "Detail Pesanan",
    component: DetailPesanan,
  },
  {
    path: "/laundry/:type",
    name: "Laundry",
    component: LaundryType,
    meta: {
      withoutAuth: true,
    },
  },
  {
    path: "/mitra/:id",
    name: "Laundry Mitra Info",
    component: MitraInfo,
    meta: {
      withoutAuth: true,
    },
  },
  {
    path: "/setting",
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

router.beforeResolve((to, from, next) => {
  const withoutAuth = to.matched.some((record) => record.meta.withoutAuth);
  const isLoggedIn = auth().currentUser;

  if (!withoutAuth && !isLoggedIn) next("/login");
  else if ((to.path == "/login" || to.path == "/register") && isLoggedIn)
    next("/");
  else next();
  //   if ((withoutAuth && !isLoggedIn) || (!withoutAuth && isLoggedIn)) {
  //     next();
  //   } else if (withoutAuth && isLoggedIn) {
  //     // to root
  //     next("/");
  //   }
  //   //   // console.log(from);
});

export default router;
