<template>
  <div class="bg-teal-500 text-left">
    <div class="appbar text-white">
      <button class="icon-button" @click="$router.go(-1)">
        <i class="fa fa-arrow-left text-xl"></i>
      </button>
    </div>

    <div class="body login-form bg-white rounded-t-3xl pt-6 px-6">
      <h1 class="text-3xl text-center mb-6">Register</h1>

      <form @submit="checkForm" method="POST">
        <div class="my-3">
          <label class="block text-gray-700 text-lg mb-2" for="username">
            Username
          </label>
          <div class="flex">
            <i class="fa fa-user-o login-form-icon" aria-hidden="true"></i>

            <input
              type="text"
              class="login-form-input pl-12"
              v-model="username"
              name="username"
              placeholder="example@domain.com"
              autocomplete="username"
            />
          </div>
        </div>

        <div class="my-3">
          <label class="block text-gray-700 text-lg mb-2" for="email">
            Email
          </label>
          <div class="flex">
            <i class="fa fa-user login-form-icon" aria-hidden="true"></i>

            <input
              type="text"
              class="login-form-input pl-12"
              v-model="email"
              name="email"
              placeholder="example@domain.com"
              autocomplete="email"
            />
          </div>
        </div>

        <div class="my-3">
          <label class="block text-gray-700 text-lg mb-2" for="password">
            Password
          </label>
          <div class="flex">
            <i class="fa fa-lock login-form-icon" aria-hidden="true"></i>

            <input
              type="password"
              class="login-form-input pl-12"
              v-model="password"
              name="password"
              placeholder="******************"
              autocomplete="current-password"
            />
          </div>
        </div>

        <div class="my-3">
          <label class="block text-gray-700 text-lg mb-2" for="password">
            Ulangi Password
          </label>
          <div class="flex">
            <i class="fa fa-lock login-form-icon" aria-hidden="true"></i>

            <input
              type="password"
              class="login-form-input pl-12"
              v-model="repeat_password"
              name="repeat_password"
              placeholder="******************"
            />
          </div>
        </div>

        <button type="submit" class="bg-black w-full text-white btn my-3">
          Register
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
          <span class="pl-3"> Daftar dengan Google </span>
        </button>

        <p class="text-center text-gray">
          Sudah memiliki Akun?
          <router-link to="/" class="text-link">Login</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: "",
    email: "",
    password: "",
    repeat_password: "",

    errors: null,
  }),
  methods: {
    checkForm: function (e) {
      if (this.name && this.age) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.age) {
        this.errors.push("Age required.");
      }

      e.preventDefault();
    },
  },
};
</script>

<style>
</style>