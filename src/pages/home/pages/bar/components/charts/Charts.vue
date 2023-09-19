<script setup>
import { ref } from "vue";
import { vElementSize } from "@vueuse/components";
import { GridLayout, GridItem } from "vue3-grid-layout-next";
import config from "@/configs/chartsConfig";
import StackedLineChart from "@/components/stackedLineChart/StackedLineChart.vue";
import ChartFoo from "../chartFoo/ChartFoo.vue";

const { colsNumber, getRowHeight } = config;

// calculation for grid layout height by depending on the height of the container
// the height of the grid layout is determined by rowHeight
const rowHeight = ref(0);

function onResize({ width, height }) {
  if (height > 0) {
    console.log("onResize", width, height);
    rowHeight.value = getRowHeight(height);
  }
}

// grid layout options
const initial_layout = Array.from({ length: 32 }, (_, index) => {
  return {
    x: index % 8,
    y: Math.floor(index / 8),
    w: 1,
    h: 1,
    i: index.toString(),
    static: false,
    component: ChartFoo,
  };
});

const layout = ref(initial_layout.filter((item) => item.x > 4));

const draggable = true;
const resizable = true;
</script>

<template>
  <!-- this container is given for calculation of height of the grid layout -->
  <div class="charts-container" v-element-size="onResize">
    <!-- only if rowHeight is greater than 0 -->
    <GridLayout
      v-if="rowHeight > 0"
      v-model:layout="layout"
      :col-num="colsNumber"
      :row-height="rowHeight"
      :is-draggable="draggable"
      :is-resizable="resizable"
      :vertical-compact="true"
      :use-css-transforms="false"
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
        <component :is="item.component"></component>
      </GridItem>
    </GridLayout>
  </div>
</template>

<style scoped>
.charts-container {
  width: 100%;
  height: 100%;
  /* avoid overlapping with header */
  padding-top: 100px;
  pointer-events: none;
}

.vue-grid-layout {
}

.vue-grid-item {
  pointer-events: all;
  border: 1px dashed red;
}

.vue-grid-item:not(.vue-grid-placeholder) {
  /* border: 1px dashed #ccc; */
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
