<script setup>
defineProps({
  index: Number,
  backgroundColor: String,
});
</script>

<template>
  <div class="layer" :style="{ zIndex: index }">
    <slot></slot>
  </div>
</template>

<style scoped>
.layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background-color: transparent;
  overflow: hidden; /* prevent child from overflowing */
}
</style>
