<template>
  <b-container fluid>
    <NavBar></NavBar>
    <router-view />
  </b-container>
</template>

<script>
//import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
@import "../src/assets/css/styles.css";
</style>
