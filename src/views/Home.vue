<template>
  <div class="home h-full">
    <VerifikasiSukses />
  </div>
</template>

<script>
// @ is an alias to /src
import VerifikasiSukses from "@/components/VerifikasiSukses.vue";

export default {
  name: "Home",
  components: {
    VerifikasiSukses,
  },
};
</script>
