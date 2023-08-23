<script setup>
import Layer from "../../components/layer/Layer.vue";
</script>

<template>
  <!-- nav layer -->
  <Layer :index="1000">
    <div class="nav">Navigation Layer</div>
    <router-view></router-view>
  </Layer>
  <!-- background layer -->
  <Layer :index="1">
    <div class="background">Background</div>
  </Layer>

  <portal-target name="destination" multiple />
</template>

<style scoped>
.nav {
  width: 100%;
  height: 100%;
}
.background {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>
