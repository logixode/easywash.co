<template>
  <button class="px-6 my-1 py-3 w-full">
    <div class="flex">
      <div
        class="h-11 w-11 rounded-full flex justify-center items-center"
        :class="
          title != 'Keluar'
            ? 'bg-teal-100 text-teal-500'
            : 'bg-red-100 text-red-500'
        "
      >
        <i :class="icon" class="text-xl"></i>
      </div>

      <div class="text-left ml-5 self-center flex-1">
        <div class="flex justify-between">
          <h3>{{ title }}</h3>
        </div>
        <p class="clamp-1 text-sm">
          {{ deskripsi }}
        </p>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  props: ["icon", "title", "deskripsi"],
};
</script>

<style></style>
