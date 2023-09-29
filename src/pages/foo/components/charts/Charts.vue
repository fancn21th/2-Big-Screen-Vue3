<script setup>
import ChartsLayout from '@/components/chartsLayout/ChartsLayout.vue';
import NightingaleChart from '@/components/nightingaleChart/NightingaleChart.vue';

// grid layout options
const initial_layout = Array.from({ length: 32 }, (_, index) => {
  return {
    x: index % 8,
    y: Math.floor(index / 8),
    w: 1,
    h: 1,
    i: index.toString(),
    static: false,
    component: NightingaleChart,
  };
});

const layout = initial_layout.filter((item) => item.x > 4);
</script>

<template>
  <ChartsLayout :layout="layout"> </ChartsLayout>
</template>
