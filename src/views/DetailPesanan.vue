<template>
  <div class="bg-teal-500 h-full text-left">
    <!-- appbar -->
    <div class="appbar text-white">
      <button class="btn-icon m-2" @click="$router.go(-1)">
        <i class="fa fa-arrow-left text-xl"></i>
      </button>
      <h2 class="flex-1 text-center">Detail Pesanan</h2>
      <div class="w-12 m-2"></div>
    </div>

    <!-- body -->
    <div class="body login-form bg-white rounded-t-3xl">
      <div class="bg-white p-6 shadow-lg">
        <p>Status</p>
        <h2 class="text-teal-500">{{ data.status }}</h2>

        <hr class="my-3" />

        <div class="flex justify-between">
          <p>Tanggal Order</p>
          <p>
            <b>{{ data.tgl_order }}</b>
          </p>
        </div>
        <div class="flex justify-between">
          <div class="">
            <p>Incoice</p>
            <p>{{ data.invoice }}</p>
          </div>
          <button class="btn-transparent py-2 font-bold self-center mt-2">
            Salin
          </button>
        </div>
      </div>

      <riwayat-list :data="data" class="mt-6 mx-4"></riwayat-list>

      <!-- Detail Penigiriman -->
      <div class="py-3 mt-3 px-6 bg-white shadow-md">
        <h2>Detail Pesanan</h2>

        <div class="mt-1">
          <div class="flex">
            <p class="w-2/5">Kurir Antar Jemput :</p>
            <td class="w-3/5 pl-2">
              <b>{{ data.pelanggan }}</b>
            </td>
          </div>
          <div class="flex">
            <p class="w-2/5">Estimasi Selesai :</p>
            <p class="w-3/5 pl-2">
              <b>{{ data.tgl_selesai }}</b>
            </p>
          </div>
          <div class="flex">
            <p class="w-2/5">Alamat Pengiriman :</p>
            <p class="w-3/5 pl-2">
              <b>{{ data.alamat_pengiriman }}</b>
            </p>
          </div>
        </div>
      </div>

      <!-- Detail Pembayaran -->

      <div class="py-3 mt-5 px-6 bg-white shadow-md">
        <h2>Detail Pembayaran</h2>

        <div class="mt-1">
          <div class="flex">
            <p class="w-3/5">Kurir Antar Jemput :</p>
            <td class="w-2/5 pl-2">
              <b>Rp. {{ data.harga }}</b>
            </td>
          </div>
          <div class="flex">
            <p class="w-3/5">Estimasi Selesai :</p>
            <p class="w-2/5 pl-2">
              <b>Rp. {{ data.ongkir }}</b>
            </p>
          </div>
          <div class="flex">
            <p class="w-3/5">Alamat Pengiriman :</p>
            <p class="w-2/5 pl-2">
              <b>Rp. {{ data.total_harga }}</b>
            </p>
            <!-- <p>{{ $route.params.id }}</p> -->
          </div>
        </div>
      </div>

      <div class="px-6 mt-5">
        <button class="btn bg-white border-teal-500 text-teal-500 w-full">
          Hubungi Penjual
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import RiwayatList from "@/components/Riwayat/RiwayatList.vue";

export default {
  components: { RiwayatList },
  props: {},
  data: () => ({
    data: {
      status: "Dicuci",
      pelanggan: "Rohmad Kurniadi",
      alamat_pengiriman:
        "Rt.01/Rw.02, Dusun Singolatren, Singojuruh, Kab. Banyuwangi",
      metode_pembayaran: "CASH",
      ongkir: 5000,
      total_harga: 65000,
      type: "Pakaian",
      title: "MND Laundry",
      tgl_order: "24 Mei 2021",
      tgl_selesai: "Estimasi (19 Apr - 20 Apr)",
      img: "/img/1.png",
      location: "Singojuruh, Banyuwangi",
      total_cuci: 10,
      harga: 60000,
      invoice: "INV/333/GKHJ/777/117678",
    },
  }),
};
</script>

<style></style>
