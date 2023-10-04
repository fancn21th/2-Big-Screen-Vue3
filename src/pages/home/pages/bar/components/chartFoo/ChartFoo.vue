<script setup>
import useGlobalStagger from '@/composables/useGlobalStagger';
import ChartConfiguratorWrapper from '@/components/chartConfigurator/ChartConfiguratorWrapper.vue';
import { ref, onMounted } from 'vue';
import Battery from '@/components/battery/Battery.vue';

const { register } = useGlobalStagger();

const chartRef = ref(null);

// animation registry
onMounted(() => {
  // register the dom that needs to be animated
  register(chartRef, 'chart', {
    x: '400%',
    stagger: {
      grid: [4, 3],
      from: 'random',
      amount: 1,
      ease: 'ease.inOut',
    },
  });
});
</script>

<template>
  <div class="chartfoo-container" ref="chartRef">
    <ChartConfiguratorWrapper
      :meta="{
        key: '123',
      }"
    >
      <Battery />
      <Battery />
    </ChartConfiguratorWrapper>
  </div>
</template>

<style scoped>
.chartfoo-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
