<template>
  <div class="bg-teal-500 h-full text-left">
    <!-- appbar -->
    <div class="appbar text-white">
      <!-- <button class="btn-icon m-2" @click="$router.go(-1)">
        <i class="fa fa-arrow-left text-xl"></i>
      </button> -->
      <h2 class="flex-1 text-center">Pesan</h2>
      <!-- <div class="w-12 m-2"></div> -->
    </div>

    <!-- body -->
    <div class="body bg-white rounded-t-3xl pt-3">
      <!-- List Pesan -->
      <div v-for="(list, id) in pesanList" :key="id" @click="goto(id)">
        <pesan-list :data="list"></pesan-list>
      </div>

      <!-- Navbar -->
      <Navbar active="pesan" class="px-6" />
    </div>
  </div>
</template>

<script>
import PesanList from "@/components/Pesan/PesanList.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    PesanList,
    Navbar,
  },
  data: () => ({
    pesanList: [
      {
        id: 0,
        nama: "Kiki Karisma",
        img: "/img/1.png",
        pesan: "ini adalah isi pesan",
        jam: "12.00",
      },
      {
        id: 1,
        nama: "Ayip Widodo",
        img: "/img/1.png",
        pesan: "ini adalah isi pesan",
        jam: "12.20",
      },
    ],
  }),
};
</script>

<style></style>
