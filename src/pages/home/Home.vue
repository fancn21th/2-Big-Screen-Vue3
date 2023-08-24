<script setup>
import Layer from "../../components/layer/Layer.vue";
import Charts from "./components/charts/Charts.vue";
import Map from "./components/map/Map.vue";
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
      <Map />
    </Layer>
  </portal>
</template>
