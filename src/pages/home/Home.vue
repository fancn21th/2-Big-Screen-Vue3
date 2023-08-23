<script setup>
import Layer from "../../components/layer/Layer.vue";
import Charts from "./components/charts/Charts.vue";
</script>

<template>
  <portal to="destination" :order="1">
    <!-- charts layer -->
    <Layer :index="100">
      <Charts />
    </Layer>
  </portal>

  <portal to="destination" :order="2">
    <!-- map layer -->
    <Layer :index="10">
      <h1>Map</h1>
    </Layer>
  </portal>
</template>
