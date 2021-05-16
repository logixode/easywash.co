import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Setting from "../views/Setting.vue";
import Onboarding from "../views/Onboarding.vue";

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
