<template>
  <div class="bg-teal-500 h-full text-left">
    <!-- appbar -->
    <div class="appbar text-white">
      <button class="btn-icon m-2" @click="$router.replace('/')">
        <i class="fa fa-arrow-left text-xl"></i>
      </button>
      <h2 class="flex-1 text-center capitalize">Laundry</h2>
      <div class="w-12 m-2"></div>
    </div>

    <!-- body -->
    <div class="body login-form bg-white px-5">
      <!-- Tab Bar -->
      <div class="flex w-screen text-center -mx-5">
        <div class="w-1/3">
          <!-- {{ $route.params.type }} -->
          <button
            class="btn-tabbar"
            @click="$router.push('/laundry/pakaian')"
            :disabled="$route.params.type == 'pakaian'"
          >
            Pakaian
          </button>
        </div>
        <div class="w-1/3">
          <button
            class="btn-tabbar"
            @click="$router.push('/laundry/sepatu')"
            :disabled="$route.params.type == 'sepatu'"
          >
            Sepatu
          </button>
        </div>
        <div class="w-1/3">
          <button
            class="btn-tabbar"
            @click="$router.push('/laundry/helm')"
            :disabled="$route.params.type == 'helm'"
          >
            Helm
          </button>
        </div>
      </div>
      <hr class="mb-5" />

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
