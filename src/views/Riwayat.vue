<template>
  <div class="bg-teal-500 h-full text-left">
    <!-- appbar -->
    <div class="appbar text-white">
      <!-- <button class="btn-icon m-2" @click="$router.go(-1)">
        <i class="fa fa-arrow-left text-xl"></i>
      </button> -->
      <h2 class="flex-1 text-center">Riwayat</h2>
      <!-- <div class="w-12 m-2"></div> -->
    </div>

    <!-- body -->
    <div class="body bg-white rounded-t-3xl pt-6 px-6">
      <div v-for="(list, id) in dataLists" :key="id" @click="goto(id)">
        <riwayat-list :data="list"></riwayat-list>
      </div>

      <!-- Navbar -->
      <Navbar active="riwayat" class="px-6" />
    </div>
  </div>
</template>

<script>
import RiwayatList from "@/components/Riwayat/RiwayatList.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    RiwayatList,
    Navbar,
  },
  data: () => ({
    dataLists: [
      {
        status: "Dicuci",
        type: "Pakaian",
        title: "MND Laundry",
        tgl_order: "24 Mei 2021",
        tgl_selesai: "Estimasi (19 Apr - 20 Apr)",
        img: "/img/1.png",
        location: "Singojuruh, Banyuwangi",
        total_cuci: 10,
        total_harga: 65000,
      },
      {
        status: "Selesai",
        type: "Sepatu",
        title: "Keikikik laundry",
        tgl_order: "19 Mei 2021",
        tgl_selesai: "20 Mei 2021",
        img: "/img/2.png",
        location: "Licin, Banyuwangi",
        total_cuci: 5,
        total_harga: 32000,
      },
      {
        status: "Selesai",
        type: "Helm",
        title: "Cleanable laundry",
        tgl_order: "11 Mei 2021",
        tgl_selesai: "13 Mei 2021",
        img: "/img/3.png",
        location: "Genteng, Banyuwangi",
        total_cuci: 2,
        total_harga: 15000,
      },
    ],
  }),
  methods: {
    goto(id) {
      this.$router.push(`/app/detail_pesanan/${id}`);
    },
  },
};
</script>

<style></style>
