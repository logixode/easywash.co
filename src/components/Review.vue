<template>
  <div class="review">
    <i
      class="fa fa-star"
      v-for="i in 5"
      :key="i"
      :class="i <= value ? 'text-yellow-400' : 'text-gray-400'"
    ></i>

    <span class="text-sm"> (100 reviews) </span>
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>

<style></style>
