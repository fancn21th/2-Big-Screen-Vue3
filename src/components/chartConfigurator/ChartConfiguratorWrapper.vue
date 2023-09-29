<script setup>
//   limit: 10,
//   dimension: "category",
//   metrics: ["项目数:id:count:num", "总金额:donate_money:sum:dmsum"],
//   filters: ["year:eq:2023"],
//   sorts: ["num:asc"],
const props = defineProps({
  meta: {
    type: Object,
    required: true,
  },
});

import { ref } from 'vue';
import { useTextareaAutosize, useDebounceFn } from '@vueuse/core';

const { textarea, input } = useTextareaAutosize();

const show = ref(false);

const prettified = ref(false);

const change = useDebounceFn(() => {
  try {
    input.value = JSON.stringify(JSON.parse(input.value), null, 2);
    prettified.value = true;
  } catch (error) {
    prettified.value = false;
  }
}, 1000);

const click = () => {
  show.value = true;
};

const test = () => {
  console.log('test', {
    meta: props.meta,
    input: input.value,
  });
};

const close = () => {
  show.value = false;
};
</script>

<template>
  <button @click="click">打开配置</button>
  <Teleport to="#configurator" v-if="show">
    <div class="configurator-container">
      <div class="configurator">
        <div class="info">
          <div class="title">{{ meta.key }}</div>
          <span class="close" @click="close">X</span>
        </div>
        <div class="editor-container">
          <textarea
            ref="textarea"
            v-model="input"
            class="editor"
            placeholder="Query String Filling in "
            @change="change"
          />
        </div>
        <div class="panel">
          <button @click="test">测试</button>
          <span v-if="prettified">Prettified !</span>
        </div>
      </div>
    </div>
  </Teleport>
  <slot></slot>
</template>

<style scoped>
.configurator-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.configurator {
  position: relative;
  width: 600px;
  height: 500px;
  background-color: #efefef;
  padding: 10px;
}
.editor-container {
  width: 100%;
  height: 50%;
}
.editor {
  width: 100%;
  min-height: 50%;
}
.panel {
  position: absolute;
  bottom: 10px;
}
.info {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.close {
  cursor: pointer;
}
</style>
