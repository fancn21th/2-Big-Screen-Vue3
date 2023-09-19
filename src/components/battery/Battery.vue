<script setup>
import { useTheme } from "@/composables/useTheme";
const { fonts, colors } = useTheme();
const textSize = fonts.word.size;
const bgWord = colors.bgWord;
</script>

<template>
  <div class="battery-container">
    <div class="left" :style="{ fontSize: fonts.sm.size }">
      <span class="text title">已验收数量</span>
      <span class="text count">30个</span>
    </div>
    <div class="right offset" :style="{ fontSize: fonts.sm.size }">
      <!-- https://css-tricks.com/snippets/css/gradient-text/ -->
      <span
        class="text title"
        :style="`
            background: -webkit-linear-gradient(${colors.bgWord}, ${colors.primary});
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        `"
        >已验收数量</span
      >
      <span
        class="text count"
        :style="`
            background: -webkit-linear-gradient(${colors.bgWord}, ${colors.primary});
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        `"
        >30个</span
      >
    </div>
  </div>
</template>

<style scoped>
.battery-container {
  display: flex;
  flex-direction: row;
}
.text {
  /* binding variables defined in script by referring to  https://cn.vuejs.org/api/sfc-css-features.html#v-bind-in-css */
  font-size: v-bind(textSize);
}
.left,
.right {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-position: center center;
}
.left {
  width: 96px;
  height: 82px;
  background-image: url("./assets/left.png");
  color: v-bind(bgWord);
  background-size: contain;
  background-repeat: no-repeat;
}
.right {
  width: 108px;
  height: 82px;
  background-image: url("./assets/right.png");
}
.offset {
  position: relative;
  left: -10px;
  top: 3px;
}
.title {
  display: inline-block;
}
.count {
  display: inline-block;
}
</style>
