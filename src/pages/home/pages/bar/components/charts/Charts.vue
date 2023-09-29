<script setup>
import ChartsLayout from '@/components/chartsLayout/ChartsLayout.vue';
import ChartFoo from '../chartFoo/ChartFoo.vue';

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

const layout = initial_layout.filter((item) => item.x > 4);
</script>

<template>
  <ChartsLayout :layout="layout"> </ChartsLayout>
</template>
