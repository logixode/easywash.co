import Vue from "vue";
import Vuex from "vuex";
import { db } from "../firebase";
import { auth } from "../firebase";
// import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    user: null,
    uid: null,
    error: null,
    loading: false,
    verified: true,
    authStatus: "",
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
    setAuthStatus(state, payload) {
      state.authStatus = payload;
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
          if (querySnapshot.empty) {
            commit(
              "setAuthStatus",
              "User belum terdaftar, silahkan mendaftar terlebih dahulu"
            );
          }
          commit("setLoading", false);
          querySnapshot.forEach((doc) => {
            commit("setUser", doc.data());
          });
        })
        .catch((error) => {
          commit("setLoading", false);
          console.log(error);
        });
    },
    autoSignIn({ commit, state, dispatch }, payload) {
      if (!state.user) {
        if (!payload.emailVerified) commit("isVerified", false);

        commit("setLoading", true);
        dispatch("getUserData", payload.uid);
        // commit("setUser", { email: payload.uid });
      }
    },
    registerWithGoogle({ commit }) {
      return new Promise((resolve, reject) => {
        var provider = new auth.GoogleAuthProvider();
        auth()
          .signInWithPopup(provider)
          .then(async (result) => {
            let user = {
              name: result.user.displayName,
              email: result.user.email,
              uid: result.user.uid,
            };

            await commit("isVerified", result.user.emailVerified);
            if (!result.user.emailVerified) {
              await auth()
                .currentUser.sendEmailVerification()
                .catch((error) => console.log(error));
            }

            await commit("setLoading", false);
            await db
              .collection("users")
              .doc(user.uid)
              .set(user)
              .then(async () => {
                await commit("setUser", user);
                resolve();
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            commit("setLoading", false);
            reject(error);
          });
      });
    },
  },
  modules: {},
});
