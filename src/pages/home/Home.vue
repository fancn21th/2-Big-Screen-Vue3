<script setup>
import { onMounted } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import Layer from "../../components/layer/Layer.vue";
import Charts from "./components/charts/Charts.vue";
import Map from "./components/map/Map.vue";
import Filter from "./components/filter/Filter.vue";

import useGlobalStagger from "../../composables/useGlobalStagger";

const { run, undo } = useGlobalStagger();

onMounted(() => {
  run();
});

onBeforeRouteLeave(async (to, from) => {
  const result = await undo();
  return result;
});
</script>

<template>
  <Layer :index="100">
    <!-- charts layer -->
    <Charts />
  </Layer>

  <Layer :index="101">
    <!-- charts layer filter panel -->
    <Filter />
  </Layer>

  <Layer :index="10">
    <!-- map layer -->
    <Map />
  </Layer>
</template>
