<script setup>
defineProps({
  index: Number,
});
</script>

<template>
  <div class="layer">
    {{ index }}
  </div>
</template>

<style scoped>
.layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  border: 1px solid black;
}
</style>
