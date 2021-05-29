<template>
  <div class="h-screen overflow-y-scroll text-left">
    <!-- header app -->
    <div class="bg-teal-500 py-6 flex text-white">
      <div class="w-1/3 items-center pl-5">
        <img
          src="../assets/img/profile.jpg"
          alt=""
          class="profile-image h-24 border-4 border-gray-300 border-opacity-50"
        />
      </div>

      <div class="w-2/3 self-center">
        <h2 class="clamp-1">Rohmad Kurniadi</h2>
        <p>rohmad1230@gmail.com</p>
      </div>
      <!-- <button class="btn-icon mr-1">
        <i class="fa fa-bell text-2xl"></i>
      </button> -->
    </div>

    <div class="bg-white px-6 pt-5 pb-3 shadow-md mb-3">
      <h2>Pengaturan Akun</h2>
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

    <div class="bg-white px-6 pt-5 pb-3 shadow-md mb-3">
      <h2>Seputar Laundry</h2>
      <menu-list icon="fa fa-info" title="Kenali Laundry"></menu-list>
      <menu-list icon="fa fa-book" title="Syarat dan ketentuan"></menu-list>
      <menu-list icon="fa fa-shield" title="Kebijakan Privasi"></menu-list>
      <menu-list icon="fa fa-star" title="Ulas Aplikasi"></menu-list>
    </div>
    <div class="bg-white px-6 pt-2 shadow-md">
      <menu-list icon="fa fa-sign-out" title="Keluar"></menu-list>

      <!-- Navbar -->
      <Navbar class="px-6" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MenuList from "@/components/MenuList.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    MenuList,
  },
};
</script>
