<template>
  <div class="home h-full">
    <div class="flex p-6 text-white header-app">
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
        <button class="px-3 py-2 mr-1">
          <i class="fa fa-bell text-2xl"></i>
        </button>
        <img
          src="../assets/img/profile.jpg"
          alt=""
          class="profile-image h-12 border-4 border-gray-300 border-opacity-50"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import VerifikasiSukses from "@/components/VerifikasiSukses.vue";

export default {
  name: "Home",
  components: {
    // VerifikasiSukses,
  },
};
</script>
