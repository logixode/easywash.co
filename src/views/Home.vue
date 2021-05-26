<template>
  <div class="home h-full pt-6">
    <!-- header app -->
    <div class="flex text-white header-app mb-6 px-6">
      <div class="text-left flex-1">
        <h2 class="clamp-1">Hai, Rohmad Kurniadi</h2>
        <p class="clamp-1">
          <span>
            <i class="fa fa-map-marker"></i>
          </span>
          Singolatren, Singojruh, Banyuwangi
        </p>
      </div>

      <div class="flex items-center">
        <button class="btn-icon mr-1">
          <i class="fa fa-bell text-2xl"></i>
        </button>
        <img
          src="../assets/img/profile.jpg"
          alt=""
          class="profile-image h-12 border-4 border-gray-300 border-opacity-50"
        />
      </div>
    </div>

    <div class="home-body px-6">
      <!-- Category menu -->
      <category class="mb-6" />

      <!-- Rekomendasi -->
      <rekomendasi />

      <!-- Tips -->
      <tips />

      <!-- bottom-bar -->
      <bottom-bar active="home" />
    </div>
  </div>
</template>

<script>
import Category from "@/components/Home/Category.vue";
import Rekomendasi from "@/components/Home/Rekomendasi.vue";
import Tips from "@/components/Home/Tips.vue";
import BottomBar from "@/components/BottomBar.vue";

export default {
  name: "Home",
  components: {
    Category,
    Rekomendasi,
    Tips,
    BottomBar,
  },
};
</script>
