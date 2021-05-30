<template>
  <div class="bg-teal-500 text-left h-full">
    <div class="h-1/5 px-6 text-white">
      <h1 class="py-10 text-3xl">Hai, Selamat Datang Kembali :)</h1>
    </div>

    <div
      class="
        h-4/5
        login-form
        bg-white
        rounded-t-3xl
        pt-6
        px-6
        border-none border-0
      "
    >
      <h1 class="text-3xl text-center mb-6">Login</h1>

      <form @submit.prevent="submit" method="POST">
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

        <alert-msg v-if="errors.login.status" type="error">{{
          errors.login.msg
        }}</alert-msg>

        <div class="text-right">
          <router-link to="/forgot-password" class="text-gray"
            >Lupa Password?</router-link
          >
        </div>
        <button type="submit" class="bg-black w-full text-white btn my-3">
          Login
        </button>
        <p class="text-center text-gray">Atau</p>
        <button
          type="submit"
          class="border-2 border-gray-200 w-full btn my-3 flex justify-center"
        >
          <img
            src="../assets/img/google-icon.svg"
            alt="Google-icon"
            srcset=""
            width="30"
          />
          <span class="pl-3"> Login dengan Google </span>
        </button>

        <p class="text-center text-gray">
          Belum memiliki Akun?
          <router-link to="/register" class="text-link">Daftar</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import ErrorInput from "@/components/ErrorInput";
import AlertMsg from "@/components/AlertMsg";
import { auth } from "../firebase";
// import { db } from "../firebase";

export default {
  components: {
    ErrorInput,
    AlertMsg,
  },
  data: () => ({
    form: {
      email: "",
      password: "",
    },

    errors: {
      email: {
        msg: "Format email salah",
        status: false,
      },
      password: {
        msg: "Password minimal harus 6 karakter",
        status: false,
      },
      login: {
        msg: null,
        status: false,
      },
    },
  }),
  validations: {
    form: {
      email: { required, email },
      password: { required, min: minLength(6) },
    },
  },
  methods: {
    submit() {
      let form = this.$v.form;
      this.$v.form.$touch();
      this.errors.email.status = !form.email.email;
      this.errors.password.status = !form.password.min;

      if (!this.$v.form.$error) {
        this.errors.login.status = false;
        if (!this.errors.login.status) {
          this.login();
        }
      }
    },
    login() {
      this.$store.commit("setLoading", true);
      auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((val) => {
          let user = val.user;

          this.$store.commit("setUID", user.uid);
          this.$router.push("/");
        })
        .catch((error) => {
          this.$store.commit("setLoading", false);
          this.errors.login.status = true;
          this.errors.login.msg = error.message;
          console.log(error);
        });
    },
  },
};
</script>
