<template>
  <div class="">
    <div class="h-16 mt-2"></div>
    <div
      class="
        rounded-t-3xl
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
      <button class="btn-menu" v-if="$route.name == 'Home'">
        <i class="fa fa-home text-teal-500 text-2xl mr-1"></i>
        Beranda
      </button>
      <router-link to="/" v-else>
        <button class="btn-icon">
          <i class="fa fa-home text-gray-500 text-2xl"></i>
        </button>
      </router-link>
      <button class="btn-menu" v-if="$route.name == 'Riwayat'">
        <i class="fa fa-history text-teal-500 text-2xl mr-1"></i>
        Riwayat
      </button>
      <router-link to="/riwayat" v-else>
        <button class="btn-icon">
          <i class="fa fa-history text-gray-500 text-2xl"></i>
        </button>
      </router-link>
      <button class="btn-menu" v-if="$route.name == 'Pesan'">
        <i class="fa fa-envelope text-teal-500 text-2xl mr-1"></i>
        Pesan
      </button>
      <router-link to="/pesan" v-else>
        <button class="btn-icon">
          <i class="fa fa-envelope text-gray-500 text-2xl"></i>
        </button>
      </router-link>
      <button class="btn-menu" v-if="$route.name == 'Profil'">
        <i class="fa fa-user text-teal-500 text-2xl mr-1"></i>
        Profil
      </button>
      <router-link to="/profil" v-else>
        <button class="btn-icon">
          <i class="fa fa-user text-gray-500 text-2xl"></i>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["$route.name"],
  mounted() {
    // console.log($route.name);
  },
};
</script>

<style></style>
