<script setup>
import Layer from "../../components/layer/Layer.vue";
</script>

<template>
  <!-- gridster layer -->
  <Layer :index="100">
    <h1>Gridster</h1>
  </Layer>
  <!-- map layer -->
  <Layer :index="10">
    <h1>Map</h1>
  </Layer>
</template>
