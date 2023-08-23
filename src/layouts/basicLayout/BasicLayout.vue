<script setup>
import Layer from "../../components/layer/Layer.vue";
</script>

<template>
  <Layer :index="1" background-color="red">
    <div>Navigation Layer</div>
    <router-view></router-view>
  </Layer>
</template>
