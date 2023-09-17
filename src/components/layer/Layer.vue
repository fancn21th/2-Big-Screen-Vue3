<script setup>
defineProps({
  index: Number,
  backgroundColor: { type: String, default: "transparent" },
  fullscreen: { type: Boolean, default: true },
  // trim: {
  //   type: Object,
  //   default: {
  //     top: 0,
  //     right: 0,
  //     bottom: 0,
  //     left: 0,
  //   },
  // },
});
</script>

<template>
  <Teleport to="#app">
    <div
      class="layer"
      :style="{
        zIndex: index,

        // marginTop: trim.top,
        // marginRight: trim.right,
        // marginBottom: trim.bottom,
        // marginLeft: trim.left,
        // backgroundColor: backgroundColor,
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
  overflow: hidden; /* prevent child from overflowing */
  visibility: hidden;
}
.layer * {
  visibility: visible;
}
</style>
