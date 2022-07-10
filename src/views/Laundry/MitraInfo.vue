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
      <div class="bg-white p-6 shadow-md">
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

      <!-- harga Cucian -->
      <div class="py-5 mt-3 px-6 bg-white shadow-md">
        <h2>Harga Cucian</h2>

        <div
          class="card-border py-3 px-4 my-2"
          v-for="(list, i) in mitraList[mitraId].laundry"
          :key="i"
        >
          <div class="flex w-full">
            <div
              class="w-2/6 capitalize"
              :class="
                i == 'pakaian'
                  ? 'text-teal-500'
                  : i == 'sepatu'
                  ? 'text-yellow-500'
                  : 'text-red-500'
              "
            >
              {{ i }}
            </div>
            <div class="w-3/6">
              Estimasi:
              <b>{{ list.estimasi }}</b>
            </div>
            <div class="w-1/6 text-right">
              <b>{{ list.harga / 1000 }}k</b>
              {{ i == "pakaian" ? "/kg" : "" }}
            </div>
          </div>
        </div>
      </div>

      <!-- Jumlah Cucian -->
      <div class="py-5 mt-3 px-6 bg-white shadow-md">
        <h2>Masukkan Jumlah Cucian</h2>

        <div class="flex mt-2">
          <div class="w-2/5">
            <select
              class="card-border px-4 h-12 w-full"
              v-model="jumlahCucian.typeCucian"
            >
              <option value="pakaian">Pakaian</option>
              <option value="sepatu">Sepatu</option>
              <option value="helm">Helm</option>
            </select>
          </div>
          <div class="w-1/5 pl-3">
            <input
              type="number"
              name="value"
              class="card-border h-12 text-center w-full font-bold"
              v-model.number="jumlahCucian.value"
            />
          </div>
          <div class="w-1/5 pl-3">
            <button
              class="card-border h-12 w-full"
              @click="cucian(-1)"
              :disabled="this.jumlahCucian.value == jumlahCucian.min"
            >
              <h1>-</h1>
            </button>
          </div>
          <div class="w-1/5 pl-3">
            <button
              class="card-border h-12 w-full"
              @click="cucian(1)"
              :disabled="this.jumlahCucian.value == jumlahCucian.max"
            >
              <h1>+</h1>
            </button>
          </div>
        </div>

        <hr class="my-4" />

        <div class="flex justify-between">
          <h3>Total</h3>
          <h3 class="text-teal-500">
            {{
              formatRupiah(
                mitraList[mitraId].laundry[jumlahCucian.typeCucian].harga *
                  jumlahCucian.value
              )
            }}
          </h3>
        </div>
      </div>

      <div class="w-full px-5 mt-3">
        <button class="btn btn-primary w-full mb-3">Cuci Sekarang</button>
        <button class="btn btn-outline-black w-full">Hubungi</button>
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
        laundry: {
          pakaian: {
            estimasi: "3 Hari",
            harga: 6000,
          },
          sepatu: {
            estimasi: "2 Hari",
            harga: 12000,
          },
          helm: {
            estimasi: "2 Hari",
            harga: 30000,
          },
        },
      },
      {
        id: 1,
        img: "/img/2.png",
        title: "Keikikik laundry",
        rating: 3,
        location: "Licin, Banyuwangi",
        laundry: {
          pakaian: {
            estimasi: "3 Hari",
            harga: 6000,
          },
          sepatu: {
            estimasi: "2 Hari",
            harga: 12000,
          },
          helm: {
            estimasi: "2 Hari",
            harga: 30000,
          },
        },
      },
      {
        id: 2,
        img: "/img/3.png",
        title: "Cleanable laundry",
        rating: 4,
        location: "Genteng, Banyuwangi",
        laundry: {
          pakaian: {
            estimasi: "3 Hari",
            harga: 6000,
          },
          sepatu: {
            estimasi: "2 Hari",
            harga: 12000,
          },
          helm: {
            estimasi: "2 Hari",
            harga: 30000,
          },
        },
      },
    ],
    jumlahCucian: {
      typeCucian: "pakaian",
      min: 0,
      max: 20,
      value: 0,
    },
  }),
  mounted() {
    this.mitraId = this.$route.params.id;
  },
  methods: {
    cucian(operation) {
      if (
        this.jumlahCucian.value <= this.jumlahCucian.max &&
        this.jumlahCucian.value >= this.jumlahCucian.min
      ) {
        this.jumlahCucian.value += operation;
      }
    },
  },
};
</script>

<style></style>
