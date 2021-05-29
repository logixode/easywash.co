<template>
  <div
    class="item-list mb-5 mt-2 p-2 card-border flex"
    @click="$router.push(`/app/mitra/${id}`)"
  >
    <img
      :src="img"
      alt=""
      srcset=""
      class="rounded-lg h-24 w-20 object-cover"
    />

    <div class="text-left ml-3 self-center flex-1">
      <h3>{{ title }}</h3>
      <review :value="rating" />

      <p class="clamp-1 text-sm self-center">
        <span>
          <i class="fa fa-map-marker"></i>
        </span>
        {{ location }}
      </p>
    </div>

    <p class="badge-primary self-center"><b>5K</b>/kg</p>
  </div>
</template>

<script>
import Review from "@/components/Review.vue";

export default {
  components: {
    Review,
  },
  props: ["id", "img", "title", "rating", "location"],
};
</script>

<style></style>
