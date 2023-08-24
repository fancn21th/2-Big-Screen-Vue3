<script setup>
import Layer from "../../components/layer/Layer.vue";
import Nav from "./components/nav/Nav.vue";
</script>

<template>
  <!-- nav layer -->
  <Layer :index="1000">
    <Nav />
    <router-view></router-view>
  </Layer>
  <!-- background layer -->
  <Layer :index="1"> </Layer>

  <portal-target name="destination" multiple />
</template>

<style scoped>
</style>
