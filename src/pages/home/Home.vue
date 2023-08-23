<script setup>
import Layer from "../../components/layer/Layer.vue";
import Grid from "./components/grid/Grid.vue";
</script>

<template>
  <!-- gridster layer -->
  <Layer :index="100">
    <Grid />
  </Layer>
  <!-- map layer -->
  <Layer :index="10">
    <h1>Map</h1>
  </Layer>
</template>
