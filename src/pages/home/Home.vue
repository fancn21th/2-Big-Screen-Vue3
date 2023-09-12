<script setup>
import Layer from "@/components/layer/Layer.vue";
import Map from "./components/map/Map.vue";
</script>

<template>
  <Layer :index="10">
    <!-- map layer -->
    <Map />
    <!-- router-view is placeholder for nested route -->
    <router-view></router-view>
  </Layer>
</template>
