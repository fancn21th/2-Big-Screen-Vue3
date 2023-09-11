<script setup>
defineProps({
  index: Number,
  backgroundColor: { type: String, default: "transparent" },
  fullscreen: { type: Boolean, default: true },
});
</script>

<template>
  <Teleport to="#app">
    <div
      class="layer"
      :style="{ zIndex: index }"
      :class="{ fullscreen: fullscreen }"
    >
      <slot></slot>
    </div>
  </Teleport>
</template>

<style scoped>
.fullscreen {
  width: 100%;
  height: 100%;
}
.layer {
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid black;
  background-color: transparent;
  overflow: hidden; /* prevent child from overflowing */
}
</style>
