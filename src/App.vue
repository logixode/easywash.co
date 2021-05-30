<template>
  <div
    id="app"
    class="h-screen"
    style="overflow-x: hidden; position: relative; width: 100vw"
  >
    <transition name="fade">
      <modal :action="false" v-show="!isVerified">
        <verifikasi type="gagal">Akun belum terverifikasi</verifikasi>
        <p class="text-lg">
          Silahkan cek email anda untuk melakukan verifikasi.
        </p>
        <button @click="$router.go()" class="btn btn-primary w-full mt-3 -mb-3">
          Refresh
        </button>
      </modal>
    </transition>

    <transition name="fade">
      <loading v-show="loading"></loading>
    </transition>

    <transition name="fade" v-if="isOffline">
      <offline />
    </transition>

    <transition name="fade" v-else>
      <router-view />
    </transition>
  </div>
</template>

<script>
import Offline from "@/components/Offline";
import Verifikasi from "@/components/Verifikasi";
import Modal from "@/components/Modal";
import Loading from "@/components/Loading";

export default {
  components: {
    Offline,
    Verifikasi,
    Modal,
    Loading,
  },
  data: () => ({}),
  mounted() {},

  computed: {
    loading() {
      return this.$store.state.loading;
    },
    isVerified() {
      return this.$store.state.verified;
    },
  },
  watch: {
    $route() {
      this.changeTitleName();
    },
  },
  created() {
    this.changeTitleName();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
