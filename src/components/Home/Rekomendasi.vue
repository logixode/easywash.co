<template>
  <div class="">
    <div class="flex justify-between mb-1">
      <h1 class="pt-1">Rekomendasi</h1>
      <router-link to="/app/rekomendasi">
        <button class="btn-transparent font-bold">Lihat Semua</button>
      </router-link>
    </div>

    <!-- List Rekomendasi -->
    <list-item
      :id="0"
      img="/img/1.png"
      title="MND Laundry"
      rating="5"
      location="Singojuruh, Banyuwangi"
    ></list-item>
    <list-item
      :id="1"
      img="/img/2.png"
      title="Heikikik Laundry"
      rating="3"
      location="Licin, Banyuwangi"
    ></list-item>
    <list-item
      :id="2"
      img="/img/3.png"
      title="Cleanable Laundry"
      rating="4"
      location="Genteng, Banyuwangi"
    ></list-item>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";

export default {
  components: {
    ListItem,
  },
};
</script>

<style></style>
