<template>
  <div class="">
    <div class="flex justify-between mb-1">
      <h1 class="pt-1">Rekomendasi</h1>
      <button class="btn-transparent font-bold">Lihat Semua</button>
    </div>

    <!-- List Rekomendasi -->
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
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
