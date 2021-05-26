<template>
  <div class="">
    <div class="h-16 mt-2"></div>
    <div
      class="
        fixed
        flex
        h-16
        py-2
        px-2
        w-screen
        bottom-0
        left-0
        bg-white
        shadow-3xl
        z-10
        justify-around
      "
    >
      <button class="btn-menu" v-if="active == 'home'">
        <i class="fa fa-home text-teal-500 text-2xl"></i>
        Beranda
      </button>
      <button class="btn-icon" v-else>
        <i class="fa fa-home text-gray-500 text-2xl"></i>
      </button>
      <button class="btn-menu" v-if="active == 'history'">
        <i class="fa fa-history text-teal-500 text-2xl"></i>
        Riwayat
      </button>
      <button class="btn-icon" v-else>
        <i class="fa fa-history text-gray-500 text-2xl"></i>
      </button>
      <button class="btn-menu" v-if="active == 'message'">
        <i class="fa fa-envelope text-teal-500 text-2xl"></i>
        Pesan
      </button>
      <button class="btn-icon" v-else>
        <i class="fa fa-envelope text-gray-500 text-2xl"></i>
      </button>
      <button class="btn-menu" v-if="active == 'profile'">
        <i class="fa fa-user text-teal-500 text-2xl"></i>
        Profil
      </button>
      <button class="btn-icon" v-else>
        <i class="fa fa-user text-gray-500 text-2xl"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["active"],
};
</script>

<style></style>
