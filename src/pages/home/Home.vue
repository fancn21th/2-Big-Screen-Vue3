<script setup>
import Layer from "../../components/layer/Layer.vue";
import Grid from "./components/charts/Charts.vue";
</script>

<template>
  <portal to="destination" :order="1">
    <Layer :index="100">
      <!-- gridster layer -->
      <Grid />
    </Layer>
  </portal>

  <portal to="destination" :order="2">
    <Layer :index="10">
      <!-- map layer -->
      <h1>Map</h1>
    </Layer>
  </portal>
</template>
