<template>
  <div class="h-full container mx-auto px-5">
    <img
      :src="`/img/${content[page - 1].img}.png`"
      alt="Tracking"
      srcset=""
      class="w-full pt-24"
    />
    <h1 class="mt-8">{{ content[page - 1].title }}</h1>
    <p>
      {{ content[page - 1].body }}
    </p>
    <template v-if="page != content.length">
      <button
        @click="next"
        class="bg-black w-20 h-20 rounded-full text-white mx-auto mt-24"
      >
        <i class="fa fa-arrow-right text-3xl"></i>
      </button>
    </template>
    <template v-else>
      <router-link to="/">
        <button @click="notFirstTime" class="w-full mt-24 mb-5 btn btn-black">
          LOGIN
        </button>
      </router-link>
      <router-link to="/register">
        <button @click="notFirstTime" class="w-full btn btn-outline-primary">
          REGISTER
        </button>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    page: 1,
    content: [
      {
        img: "tracking",
        title: "Tracking",
        body: "Kamu bisa melakukan tracking melalui detail pesanan jadi kamu bisa terus memantau proses pencucian dan jika ada keluhan bisa contact mitra laundry.",
      },
      {
        img: "jaminan-kualitas",
        title: "Jaminan Cucian",
        body: "Jika cuci di official laundry kami memberikan jaminan barang cucian jika ada kerusakan atau barang cucian hilang uang akan kami kembalikan 100%.",
      },
      {
        img: "easy-payment",
        title: "Mudah Pembayaran",
        body: "Laundry menyediakan banyak pilihan pembayaran seperti bank virtual account, cash, pembayaran online lainya dan dijamin keamanannya.",
      },
    ],
  }),
  methods: {
    next() {
      this.page++;
    },
    notFirstTime() {
      localStorage.setItem("notFirstTime", true);
    },
  },
};
</script>

<style></style>
