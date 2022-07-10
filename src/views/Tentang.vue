<template>
  <div class="bg-teal-500 h-full text-left">
    <!-- appbar -->
    <div class="appbar text-white">
      <button class="btn-icon m-2" @click="$router.go(-1)">
        <i class="fa fa-arrow-left text-xl"></i>
      </button>
      <h2 class="flex-1 text-center">Tentang</h2>
      <div class="w-12 m-2"></div>
    </div>

    <!-- body -->
    <div class="body login-form bg-white px-6 pt-3">Tentang</div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
