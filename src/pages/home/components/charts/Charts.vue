<script setup>
import { GridLayout, GridItem } from "vue3-grid-layout-next";
import { ref } from "vue";
import { config } from "../../../../configs/chartsConfig";
const { colsNumber, rowHeight } = config;
import StackedLineChart from "../stackedLineChart/StackedLineChart.vue";

const initial_layout = Array.from({ length: 32 }, (_, index) => {
  return {
    x: index % 8,
    y: Math.floor(index / 8),
    w: 1,
    h: 1,
    i: index.toString(),
    static: false,
  };
});

const layout = ref(initial_layout.filter((item) => item.x > 4));

const draggable = true;
const resizable = true;
</script>

<template>
  <GridLayout
    v-model:layout="layout"
    :col-num="colsNumber"
    :row-height="rowHeight"
    :is-draggable="draggable"
    :is-resizable="resizable"
    :vertical-compact="true"
    :use-css-transforms="true"
  >
    <GridItem
      v-for="item in layout"
      :key="item.i"
      :static="item.static"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
    >
      <StackedLineChart />
    </GridItem>
  </GridLayout>
</template>

<style scoped>
.vue-grid-layout {
}

.vue-grid-item:not(.vue-grid-placeholder) {
  border: 1px dashed #ccc;
}

.vue-grid-item .resizing {
  opacity: 0.9;
}

.vue-grid-item .static {
}

.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}

.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}

.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
    no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
