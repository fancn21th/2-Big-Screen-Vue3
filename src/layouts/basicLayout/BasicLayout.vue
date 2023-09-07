<script setup>
import Layer from "../../components/layer/Layer.vue";
import Nav from "./components/nav/Nav.vue";
</script>

<template>
  <Layer :index="1000">
    <!-- nav layer -->
    <Nav />
    <router-view></router-view>
  </Layer>
  <Layer :index="1"> <!-- background layer --></Layer>
</template>

<style scoped>
</style>
