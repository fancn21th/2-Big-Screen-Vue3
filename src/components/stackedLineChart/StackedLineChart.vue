<script setup>
import * as echarts from "echarts";
import { ref, watch, onMounted } from "vue";
import useGlobalStagger from "../../composables/useGlobalStagger";

const { register } = useGlobalStagger();

const chartRef = ref(null);

const renderChart = () => {
  const chart = echarts.init(chartRef.value);

  const option = {
    title: {
      text: "Stacked Line",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };

  chart.setOption(option);
};

onMounted(() => {
  // register the dom that needs to be animated
  register(chartRef, "chart", {
    x: "400%",
    stagger: {
      grid: [4, 3],
      from: "random",
      amount: 1,
      ease: "ease.inOut",
    },
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
