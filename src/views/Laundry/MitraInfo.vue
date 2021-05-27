<template>
  <div class="bg-teal-500 h-full text-left">
    <!-- appbar -->
    <div class="appbar text-white">
      <button class="btn-icon m-2" @click="$router.go(-1)">
        <i class="fa fa-arrow-left text-xl"></i>
      </button>
      <h2 class="flex-1 text-center">Informasi Laundry</h2>
      <div class="w-12 m-2"></div>
    </div>

    <!-- body -->
    <div class="body login-form bg-white">
      <img
        :src="mitraList[mitraId].img"
        alt=""
        srcset=""
        class="w-full h-52 object-cover"
      />
      <div class="bg-white p-6 shadow-lg">
        <h1>
          {{ mitraList[mitraId].title }}
        </h1>
        <review :value="mitraList[mitraId].rating" />
        <p class="clamp-1 text-sm self-center">
          <span>
            <i class="fa fa-map-marker"></i>
          </span>
          {{ mitraList[mitraId].location }}
        </p>
      </div>

      <!-- Detail Penigiriman -->
      <div class="py-3 mt-3 px-6 bg-white shadow-md">
        <h2>Harga Cucian</h2>
      </div>
    </div>
  </div>
</template>

<script>
// import RiwayatList from "@/components/Riwayat/RiwayatList.vue";
import Review from "@/components/Review.vue";

export default {
  components: {
    Review,
    // RiwayatList,
  },
  props: {},
  data: () => ({
    mitraId: 0,
    mitraList: [
      {
        id: 0,
        img: "/img/1.png",
        title: "MND Laundry",
        rating: 5,
        location: "Singojuruh, Banyuwangi",
      },
      {
        id: 1,
        img: "/img/2.png",
        title: "Keikikik laundry",
        rating: 3,
        location: "Licin, Banyuwangi",
      },
      {
        id: 2,
        img: "/img/3.png",
        title: "Cleanable laundry",
        rating: 4,
        location: "Genteng, Banyuwangi",
      },
    ],
  }),
  mounted() {
    this.mitraId = this.$route.params.id;
  },
};
</script>

<style></style>
