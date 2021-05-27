<template>
  <div class="container px-5 flex h-full bg-teal-500">
    <div class="m-auto text-white">
      <img alt="Easywash" class="mx-auto mb-6 h-24" src="../assets/logo.png" />
      <h1>Maaf anda sedang offline</h1>
      <p class="text-lg">
        Silahkan hidupkan data atau gunakan wifi lalu refresh kembali
      </p>
      <p class="text-lg my-2">Atau tarik halaman kebawah</p>

      <!-- <v-btn block outlined color="brown" class="mt-3" @click="$router.go()">
        <v-icon left>mdi-refresh</v-icon>Refresh
      </v-btn> -->
      <button
        class="btn bg-black border-transparent w-full mt-4"
        @click="$router.go()"
      >
        <i class="fa fa-refresh mr-3"></i>Refresh
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
