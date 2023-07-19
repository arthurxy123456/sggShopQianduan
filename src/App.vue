<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from "../src/components/Header/index.vue";
import Footer from "../src/components/Footer/index.vue";
export default {
  name: "App",
  components: { Header, Footer },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>
