<script setup>
import gsap from 'gsap';
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useFilterStore } from '@/stores/filter';

const header = ref(null);
const nav = ref(null);

const store = useFilterStore();
const { global } = storeToRefs(store);

onMounted(() => {
  const timeline = gsap.timeline();

  timeline
    .from(header.value, {
      x: -500,
      ease: 'ease.inOut',
    })
    .from(nav.value, {
      x: -100,
      ease: 'ease.inOut',
    });
});

const change = (e) => {
  store.setGlobalYear(e.target.value);
};
</script>

<template>
  <div class="container">
    <div class="header bg" ref="header">
      <h2>Logo | Header</h2>

      <div>
        <label for="global-year">年份:</label>
        <select name="global-year" :value="global.year" @change="change">
          <option value="2021年">2021年</option>
          <option value="2022年">2022年</option>
          <option value="2023年">2023年</option>
        </select>
      </div>
    </div>
    <div class="nav bg" ref="nav">
      <ul>
        <li><router-link to="/">Bar Page</router-link></li>
        <li><router-link to="/nav/home/baz">Baz Page</router-link></li>
        <li>
          <router-link to="/nav/foo">Foo Page</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.bg {
  border: 1px dashed #ccc;
  background-color: #eee;
}
.header,
.nav {
  pointer-events: all;
}
.header {
  width: 500px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.nav {
  width: 100px;
  height: 500px;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none;
}
</style>
