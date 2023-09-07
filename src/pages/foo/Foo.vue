<script setup>
import Layer from "../../components/layer/Layer.vue";
import Charts from "./components/charts/Charts.vue";
import Map from "./components/map/Map.vue";
</script>

<template>
  <Layer :index="100">
    <!-- charts layer -->
    <Charts />
  </Layer>

  <Layer :index="10">
    <!-- map layer -->
    <Map />
  </Layer>
</template>
