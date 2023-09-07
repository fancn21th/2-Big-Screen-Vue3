<script setup>
import * as echarts from "echarts";
import { ref, watch } from "vue";

const chartRef = ref(null);

const renderChart = () => {
  const chart = echarts.init(chartRef.value);

  const option = {
    // fill in your chart options here
  }

  chart.setOption(option);
};

watch(chartRef, (newVal, oldVal) => {
  if (newVal && newVal.clientHeight > 0) {
    setTimeout(() => {
      renderChart();
    }, 0);
  }
});

defineExpose({
  chartRef,
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
