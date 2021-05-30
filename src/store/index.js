import Vue from "vue";
import Vuex from "vuex";
import { db } from "../firebase";
// import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    user: null,
    uid: null,
    error: null,
    loading: false,
    verified: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setUID(state, payload) {
      state.uid = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    isVerified(state, payload) {
      state.verified = payload;
    },
    // setUsername(state, payload) {
    //   state.user.username = payload;
    // },
  },
  actions: {
    getUserData({ commit }, payload) {
      db.collection("users")
        .where("uid", "==", payload)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            commit("setUser", doc.data());
            commit("setLoading", false);
          });
        })
        .catch((error) => console.log(error));
    },
    autoSignIn({ commit, state, dispatch }, payload) {
      if (!state.user) {
        if (payload.emailVerified) commit("isVerified", true);

        commit("setLoading", true);
        dispatch("getUserData", payload.uid);
        // commit("setUser", { email: payload.uid });
      }
    },
  },
  modules: {},
});
