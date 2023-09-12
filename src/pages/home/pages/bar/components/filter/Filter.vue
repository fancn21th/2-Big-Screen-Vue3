<script setup>
import { storeToRefs } from "pinia";
import { useFilterStore } from "@/stores/filter";

const store = useFilterStore();
const { home } = storeToRefs(store);

const change = (e) => {
  store.setHomeCategory(e.target.value);
};
</script>

<template>
  <div class="bg filter-panel">
    <div>
      <label for="home-category">区域:</label>
      <select name="home-category" :value="home.category" @change="change">
        <option value="华北区域">华北区域</option>
        <option value="华中区域">华中区域</option>
        <option value="华南区域">华南区域</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.bg {
  border: 1px dashed #ccc;
  background-color: #eee;
}
.filter-panel {
  margin-left: 510px;
  width: 500px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
