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

import { ref, onUnmounted } from 'vue';
import { useTextareaAutosize, useDebounceFn } from '@vueuse/core';
import { useValidator } from '@/composables';

const { textarea, input: json } = useTextareaAutosize();

// form
const { valid, fields, validate, reset } = useValidator(
  {
    key: {
      validate: (value) => {
        return value && value.length > 0;
      },
      message: (key) => `${key} 必填`,
    },
    json: {
      validate: (value) => {
        try {
          JSON.parse(value);
          return true;
        } catch (error) {
          return false;
        }
      },
      message: (key) => `${key} 内容必须是 JSON格式`,
    },
  },
  {
    key: props.meta.key,
    json,
  },
);
// form end

const show = ref(false);

const change = useDebounceFn(() => {
  try {
    const field = fields.value['json'];
    field.value = JSON.stringify(JSON.parse(field.value), null, 2);
  } catch (error) {
    console.log(error);
  }
}, 1000);

//  show and close
const click = () => {
  show.value = true;
};

const close = () => {
  show.value = false;
};
//  show and close ends

const test = () => {
  validate();
  if (valid) {
    console.log('valid');
  }
};

const submit = (e) => {
  e.preventDefault();
};

onUnmounted(() => {
  console.log('表单卸载');
});
</script>

<template>
  <button @click="click">打开配置</button>
  <Teleport to="#configurator" v-if="show">
    <div class="configurator-container">
      <form class="configurator" @submit="submit">
        <div class="info">
          <div class="form-item">
            <label for="key">key</label>
            <input name="key" v-model="fields['key'].value" disabled />
            <span v-if="fields['key'].error" class="error">{{ fields['key'].error }}</span>
          </div>
          <span class="close" @click="close">X</span>
        </div>
        <div class="editor-container">
          <div class="form-item">
            <label for="json">json</label>
            <textarea
              name="json"
              ref="textarea"
              v-model="fields['json'].value"
              class="editor"
              placeholder="Query String Filling in "
              @change="change"
            />
            <span v-if="fields['json'].error" class="error">{{ fields['json'].error }}</span>
          </div>
        </div>
        <div class="panel">
          <button @click="test">测试</button>
        </div>
        <pre>{{ errors }}</pre>
      </form>
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
  min-height: 10vh;
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
.error {
  color: red;
}
.form-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
</style>
