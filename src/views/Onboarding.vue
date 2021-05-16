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
        class="bg-black w-20 h-20 rounded-full text-white text-xl mx-auto mt-24"
      >
        -
      </button>
    </template>
    <template v-else>
      <a href="/">
        <button
          @click="notFirstTime"
          class="bg-black w-full py-4 rounded-xl border-2 border-black text-white text-md mx-auto font-bold mt-24 mb-5"
        >
          LOGIN
        </button>
      </a>
      <a href="/#/register/">
        <button
          @click="notFirstTime"
          class="w-full py-4 rounded-xl border-green-500 border-2 text-green-500 text-md mx-auto font-bold"
        >
          REGISTER
        </button>
      </a>
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
        body:
          "Kamu bisa melakukan tracking melalui detail pesanan jadi kamu bisa terus memantau proses pencucian dan jika ada keluhan bisa contact mitra laundry.",
      },
      {
        img: "jaminan-kualitas",
        title: "Jaminan Cucian",
        body:
          "Jika cuci di official laundry kami memberikan jaminan barang cucian jika ada kerusakan atau barang cucian hilang uang akan kami kembalikan 100%.",
      },
      {
        img: "easy-payment",
        title: "Mudah Pembayaran",
        body:
          "Laundry menyediakan banyak pilihan pembayaran seperti bank virtual account, cash, pembayaran online lainya dan dijamin keamanannya.",
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

<style>
</style>