<template>
  <div class="card flex justify-between p-5">
    <button class="btn-icontext" @click="$router.push('/app/laundry/pakaian')">
      <img
        src="../../assets/icon/Pakaian.png"
        alt=""
        class="mx-auto h-11 mb-1"
      />
      <p class="text-bold">Pakaian</p>
    </button>
    <button class="btn-icontext" @click="$router.push('/app/laundry/sepatu')">
      <img
        src="../../assets/icon/Sepatu.png"
        alt=""
        class="mx-auto h-11 mb-1"
      />
      <p class="text-bold">Sepatu</p>
    </button>
    <button class="btn-icontext" @click="$router.push('/app/laundry/helm')">
      <img
        src="../../assets/icon/Helmet.png"
        alt=""
        class="mx-auto h-11 mb-1"
      />
      <p class="text-bold">Helm</p>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
