<script setup>
import { onMounted } from "vue";
import config from "@/configs/layerConfig";
const { designWidthPx, designHeightPx } = config;

onMounted(() => {
  // refer to https://stackoverflow.com/questions/76090183/using-v-bind-to-set-css-vars-in-vue-3-composition-issue
  document.documentElement.style.setProperty("--design-width", designWidthPx);
  document.documentElement.style.setProperty("--design-height", designHeightPx);
});
</script>

<template>
  <router-view></router-view>
</template>

<style>
#app {
  position: relative;
  width: var(--design-width);
  height: var(--design-height);
}
</style>
