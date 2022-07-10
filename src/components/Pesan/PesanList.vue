<template>
  <div class="" @click="$router.push(`/pesan/${data.id}`)">
    <div class="flex px-6">
      <img
        :src="data.img"
        alt=""
        srcset=""
        class="rounded-full h-14 w-14 object-cover my-5"
      />

      <div class="text-left ml-5 self-center flex-1">
        <div class="flex justify-between">
          <h3>{{ data.nama }}</h3>
          <p class="text-sm">{{ data.jam }}</p>
        </div>
        <p class="clamp-1 text-sm">
          {{ data.pesan }}
        </p>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
// import Review from "@/components/Review.vue";

export default {
  components: {
    // Review,
  },
  props: ["data"],
};
</script>

<style></style>
