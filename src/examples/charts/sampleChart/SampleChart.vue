<script setup>
import * as echarts from "echarts";
import { shallowRef, watch, onMounted } from "vue";
import useGlobalStagger from "@/composables/useGlobalStagger";

const { register } = useGlobalStagger();

const chartRef = shallowRef(null);

const renderChart = () => {
  const chart = echarts.init(chartRef.value);

  // your chart options here
  const option = {};

  chart.setOption(option);
};

onMounted(() => {
  // register the dom that needs to be animated
  register(chartRef, "XXX", {
    // x: "400%",
    // stagger: {
    //   grid: [4, 3],
    //   from: "random",
    //   amount: 1,
    //   ease: "ease.inOut",
    // },
  });
});

watch(chartRef, (newVal, oldVal) => {
  if (newVal && newVal.clientHeight > 0) {
    setTimeout(() => {
      renderChart();
    }, 0);
  }
});
</script>

<template>
  <div class="chart-container" ref="chartRef"></div>
</template>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
}
</style>
