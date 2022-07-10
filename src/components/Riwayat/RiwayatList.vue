<template>
  <div class="item-list mb-5 mt-2 py-2 px-3 card-border">
    <div class="flex justify-between mb-3">
      <div class="">
        <h3>{{ data.status }}</h3>
        <p class="text-xs text-gray-500">{{ data.tgl_order }}</p>
      </div>

      <p class="badge-danger self-center" v-if="data.type == 'Pakaian'">
        <b>Pakaian</b>
      </p>
      <p class="badge-warning self-center" v-else-if="data.type == 'Sepatu'">
        <b>Sepatu</b>
      </p>
      <p class="badge-info self-center" v-else-if="data.type == 'Helm'">
        <b>Helm</b>
      </p>
    </div>

    <hr />

    <div class="flex my-3">
      <img
        :src="data.img"
        alt=""
        srcset=""
        class="rounded-lg h-24 w-20 object-cover"
      />

      <div class="text-left ml-3 self-center flex-1">
        <h3>{{ data.title }}</h3>
        <p class="text-sm">{{ data.tgl_selesai }}</p>

        <p class="clamp-1 text-sm self-center">
          <span>
            <i class="fa fa-map-marker"></i>
          </span>
          {{ data.location }}
        </p>
      </div>
    </div>

    <hr />

    <div class="flex justify-between mt-3">
      <div class="">
        <p class="text-xs text-gray-500">Total Cuci</p>
        <h3>{{ data.total_cuci }}Kg</h3>
      </div>
      <div class="">
        <p class="text-xs text-gray-500">Total Pembayaran</p>
        <h3>{{ formatRupiah(data.total_harga) }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
// import Review from "@/components/Review.vue";

export default {
  components: {},
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          title: "",
          img: "",
          tgl_selesai: "",
          location: "",
        };
      },
    },
  },
};
</script>

<style></style>
