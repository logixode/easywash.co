<template>
  <div class="bg-teal-500 text-left">
    <transition name="fade">
      <modal action="OK" v-show="showModal" @actionClidked="actionChildClicked">
        <verifikasi type="sukses">Pendaftaran Berhasil</verifikasi>
        <p class="text-lg">
          Silahkan cek email anda untuk melakukan verifikasi.
        </p>
      </modal>
    </transition>

    <!-- appbar -->
    <div class="appbar text-white">
      <button class="btn-icon m-2" @click="$router.go(-1)">
        <i class="fa fa-arrow-left text-xl"></i>
      </button>
    </div>

    <!-- body -->
    <div class="body login-form bg-white rounded-t-3xl pt-6 px-6">
      <h1 class="text-3xl text-center mb-6">Register</h1>

      <form @submit.prevent="submit" method="POST">
        <div class="my-3">
          <label class="block text-gray-700 text-lg mb-2" for="username">
            Username
          </label>
          <div class="flex">
            <i class="fa fa-user-o login-form-icon py-1" aria-hidden="true"></i>

            <input
              required
              type="text"
              class="pl-12"
              :class="
                errors.username.status ? 'login-form-error' : 'login-form-input'
              "
              v-model="form.username"
              name="username"
              placeholder="John Doe"
              autocomplete="username"
            />
          </div>
          <error-input v-if="errors.username.status">{{
            errors.username.msg
          }}</error-input>
        </div>

        <div class="my-3">
          <label class="block text-gray-700 text-lg mb-2" for="email">
            Email
          </label>
          <div class="flex">
            <i class="fa fa-user login-form-icon py-1" aria-hidden="true"></i>

            <input
              required
              type="text"
              class="pl-12"
              :class="
                errors.email.status ? 'login-form-error' : 'login-form-input'
              "
              v-model="form.email"
              name="email"
              placeholder="example@domain.com"
              autocomplete="email"
            />
          </div>
          <error-input v-if="errors.email.status">{{
            errors.email.msg
          }}</error-input>
        </div>

        <div class="my-3">
          <label class="block text-gray-700 text-lg mb-2" for="password">
            Password
          </label>
          <div class="flex">
            <i class="fa fa-lock login-form-icon py-1" aria-hidden="true"></i>

            <input
              required
              type="password"
              class="pl-12"
              :class="
                errors.password.status ? 'login-form-error' : 'login-form-input'
              "
              v-model="form.password"
              name="password"
              placeholder="•••••••••"
              autocomplete="current-password"
            />
          </div>
          <error-input v-if="errors.password.status">{{
            errors.password.msg
          }}</error-input>
        </div>

        <div class="my-3">
          <label class="block text-gray-700 text-lg mb-2" for="password">
            Ulangi Password
          </label>
          <div class="flex">
            <i class="fa fa-lock login-form-icon py-1" aria-hidden="true"></i>

            <input
              required
              type="password"
              class="pl-12"
              :class="
                errors.repeat_password.status
                  ? 'login-form-error'
                  : 'login-form-input'
              "
              v-model="form.repeat_password"
              name="repeat_password"
              placeholder="•••••••••"
            />
          </div>
          <error-input v-if="errors.repeat_password.status">{{
            errors.repeat_password.msg
          }}</error-input>
        </div>

        <alert-msg v-if="errors.register.status" type="error">{{
          errors.register.msg
        }}</alert-msg>

        <button type="submit" class="bg-black w-full text-white btn my-3">
          Register
        </button>
        <p class="text-center text-gray">Atau</p>
        <button
          class="border-2 border-gray-200 w-full btn my-3 flex justify-center"
          @click="loginGoogle"
        >
          <img
            src="../assets/img/google-icon.svg"
            alt="Google-icon"
            srcset=""
            width="30"
          />
          <span class="pl-3"> Daftar dengan Google </span>
        </button>

        <p class="text-center text-gray">
          Sudah memiliki Akun?
          <router-link to="/login" class="text-link">Login</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import ErrorInput from "@/components/ErrorInput";
import AlertMsg from "@/components/AlertMsg";
import Modal from "@/components/Modal";
import Verifikasi from "@/components/Verifikasi";
import { db } from "../firebase";
import { auth } from "../firebase";

export default {
  components: {
    ErrorInput,
    AlertMsg,
    Modal,
    Verifikasi,
  },
  data: () => ({
    form: {
      username: "",
      email: "",
      password: "",
      repeat_password: "",
    },
    showModal: false,

    errors: {
      username: {
        msg: "Username minimal harus 6 karakter",
        status: false,
      },
      email: {
        msg: "Format email salah",
        status: false,
      },
      password: {
        msg: "Password minimal harus 6 karakter",
        status: false,
      },
      repeat_password: {
        msg: "Password tidak sama",
        status: false,
      },
      register: {
        msg: null,
        status: false,
      },
    },
  }),
  validations: {
    form: {
      username: { required, min: minLength(6) },
      email: { required, email },
      password: { required, min: minLength(6) },
      repeat_password: { required, min: minLength(6) },
    },
  },
  methods: {
    submit() {
      let form = this.$v.form;
      this.$v.form.$touch();
      this.errors.username.status = !form.username.min;
      this.errors.email.status = !form.email.email;
      this.errors.password.status = !form.password.min;

      if (this.form.password != this.form.repeat_password)
        this.errors.repeat_password.status = true;
      else {
        this.errors.repeat_password.status = false;

        if (!this.$v.form.$error) {
          this.errors.register.status = false;
          if (!this.errors.register.status) {
            this.userSignUp();
          }
        }
      }
    },
    userSignUp() {
      this.$store.commit("setLoading", true);
      auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(async (val) => {
          let user = {
            name: this.form.username,
            email: this.form.email,
            uid: val.user.uid,
          };
          await auth()
            .currentUser.sendEmailVerification()
            // .then(() => ())
            .catch((error) => console.log(error));
          await this.$store.commit("setLoading", false);
          await db
            .collection("users")
            .add(user)
            .then(() => {
              this.$store.commit("setUser", user);
              this.showModal = true;
              setTimeout(() => {
                this.$router.push("/");
              }, 2500);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          this.$store.commit("setLoading", false);
          this.errors.register.status = true;
          this.errors.register.msg = error.message;
        });
    },
    actionChildClicked(val) {
      this.showModal = val.status;
    },
    loginGoogle() {
      // var provider = new auth.GoogleAuthProvider();
      // auth
      //   .signInWithPopup(provider)
      //   .then((result) => {
      //     /** @type {firebase.auth.OAuthCredential} */
      //     var credential = result.credential;
      //     // This gives you a Google Access Token. You can use it to access the Google API.
      //     var token = credential.accessToken;
      //     // // The signed-in user info.
      //     var user = result.user;
      //     console.log("credential", credential);
      //     console.log("token", token);
      //     console.log("user", user);
      //     // ...
      //   })
      //   .catch((error) => {
      //     // Handle Errors here.
      //     var errorCode = error.code;
      //     var errorMessage = error.message;
      //     // // The email of the user's account used.
      //     var email = error.email;
      //     // // The firebase.auth.AuthCredential type that was used.
      //     var credential = error.credential;
      //     // ...
      //     console.log("error", errorCode);
      //     console.log("error msg", errorMessage);
      //     console.log("email", email);
      //     console.log("credential", credential);
      //   });
    },
  },
};
</script>
