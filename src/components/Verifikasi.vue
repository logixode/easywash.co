<template>
  <div class="text-center">
    <div
      class="
        rounded-full
        h-24
        w-24
        bg-teal-500
        flex
        justify-center
        items-center
        text-white
        mx-auto
      "
      v-if="type == 'sukses'"
    >
      <i class="fa fa-check text-5xl"></i>
    </div>
    <div
      class="
        rounded-full
        h-24
        w-24
        bg-red-500
        flex
        justify-center
        items-center
        text-white
        mx-auto
      "
      v-else-if="type == 'gagal'"
    >
      <i class="fa fa-times text-5xl"></i>
    </div>
    <h1 class="mt-2"><slot /></h1>
  </div>
</template>

<script>
export default {
  props: ["type"],
};
</script>

<style></style>
