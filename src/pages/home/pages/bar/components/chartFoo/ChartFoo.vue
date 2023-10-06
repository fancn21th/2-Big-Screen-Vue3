<script setup>
import ChartConfiguratorWrapper from '@/components/chartConfigurator/ChartConfiguratorWrapper.vue';
import Battery from '@/components/battery/Battery.vue';
</script>

<template>
  <div
    class="chartfoo-container"
    v-stagger="{
      group: 'chart',
      options: {
        x: '400%',
        stagger: {
          grid: [4, 3],
          from: 'random',
          amount: 1,
          ease: 'ease.inOut',
        },
      },
    }"
  >
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
