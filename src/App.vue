<template>
  <div
    id="app"
    class="h-screen"
    style="overflow-x: hidden; position: relative; width: 100vw"
  >
    <offline v-if="isOffline" />
    <!-- <div id="nav" class="py-24">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view v-else />
  </div>
</template>

<script>
import Offline from "@/components/Offline";

export default {
  components: {
    Offline,
  },
  data: () => ({
    // isOffline: false,
  }),
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
</style>
