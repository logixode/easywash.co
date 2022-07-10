<template>
  <div class="h-screen overflow-y-scroll text-left">
    <!-- header app -->
    <div class="bg-teal-500 py-6 flex text-white px-5">
      <div class="items-center">
        <div
          class="
            h-20
            w-20
            flex
            items-center
            rounded-full
            bg-gray-100 bg-opacity-30
          "
          v-if="!profilePicture"
        >
          <i class="fa fa-user text-4xl mx-auto"></i>
        </div>
        <img
          :src="profilePicture"
          alt=""
          class="profile-image h-20 border-4 border-gray-300 border-opacity-50"
          v-else
        />
      </div>

      <div class="flex-1 self-center px-4">
        <h2 class="clamp-1">{{ name }}</h2>
        <p class="mb-1">{{ email }}</p>
        <span class="badge-danger px-1" v-if="!isVerfied"
          >Belum diverifikasi</span
        >
      </div>
      <div class="self-center">
        <button class="btn-icon mr-1">
          <i class="fa fa-pencil text-2xl"></i>
        </button>
      </div>
      <!-- <button class="btn-icon mr-1">
        <i class="fa fa-bell text-2xl"></i>
      </button> -->
    </div>

    <div class="bg-white pt-5 pb-3 shadow-md mb-3">
      <div class="px-5 mb-3">
        <button class="btn btn-primary w-full">
          <i class="fa fa-plus text-xl mr-3"></i>
          Buat Jasa Laundry
        </button>
      </div>
      <h2 class="px-5">Pengaturan Akun</h2>
      <menu-list
        icon="fa fa-home"
        title="Alamat"
        deskripsi="Atur alamat pengiriman dan penjemputan"
      ></menu-list>
      <menu-list
        icon="fa fa-lock"
        title="Keamanan Akun"
        deskripsi="Kata sandi, PIN, dan Verifikasi data diri"
      ></menu-list>
    </div>

    <div class="bg-white pt-5 pb-3 shadow-md mb-3">
      <h2 class="px-5">Seputar Laundry</h2>
      <menu-list
        icon="fa fa-info"
        title="Tentang Kami"
        @click.native="goto('/tentang')"
      ></menu-list>
      <menu-list
        icon="fa fa-book"
        title="Syarat dan ketentuan"
        @click.native="goto('s&k')"
      ></menu-list>
      <menu-list
        icon="fa fa-shield"
        title="Kebijakan Privasi"
        @click.native="goto('kebijakan_privasi')"
      ></menu-list>
      <!-- <menu-list icon="fa fa-star" title="Ulas Aplikasi"></menu-list> -->
    </div>
    <div class="bg-white pt-2 shadow-md">
      <menu-list
        icon="fa fa-sign-out"
        title="Keluar"
        @click.native="logout"
      ></menu-list>

      <!-- Navbar -->
      <Navbar class="px-5" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MenuList from "@/components/MenuList.vue";
import { auth } from "../firebase";

export default {
  name: "Home",
  components: {
    Navbar,
    MenuList,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    name() {
      return this.user?.name;
    },
    email() {
      return this.user?.email;
    },
    profilePicture() {
      return this.user?.profilePicture;
    },
    isVerfied() {
      return this.$store.state.verified;
    },
  },
  methods: {
    logout() {
      auth()
        .signOut()
        .then(() => {
          this.$store.commit("setUser", null);
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goto(val) {
      this.$router.push(`/${val}`);
    },
  },
};
</script>
