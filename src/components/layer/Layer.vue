<script setup>
defineProps({
  index: Number,
  backgroundColor: { type: String, default: 'transparent' },
  fullscreen: { type: Boolean, default: true },
});
</script>

<template>
  <Teleport to="#app">
    <div
      class="layer"
      :style="{
        zIndex: index,
      }"
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
</style>

<style>
.layer {
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  overflow: hidden;
  /* fix overlapping issue */
  visibility: hidden;
}
.layer * {
  /* fix overlapping issue */
  visibility: visible;
}
</style>
