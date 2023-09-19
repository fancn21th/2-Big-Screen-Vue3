import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import pxtorem from "postcss-pxtorem"; // px to rem
// import pxtoviewport from "postcss-px-to-viewport"; // px to vw

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: "chrome58",
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@assets",
        replacement: fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
    ],
  },
  // css: {
  //   postcss: {
  //     plugins: [
  //       pxtorem({
  //         rootValue: 16, // 设置根元素的字体大小
  //         propList: ["*"], // 需要进行转换的属性
  //       }),
  //     ],
  //   },
  // },
  // css: {
  //   postcss: {
  //     plugins: [
  //       pxtoviewport({
  //         viewportWidth: 1920, // 设计稿宽度
  //         viewportHeight: 1080, // 设计稿高度
  //         unitPrecision: 3, // 转换后的小数点位数
  //         viewportUnit: "vw", // 转换的单位
  //         selectorBlackList: [".ignore"], // 不需要转换的CSS类名
  //         minPixelValue: 1, // 小于等于1px不转换
  //         mediaQuery: false, // 是否转换媒体查询中的单位
  //         unitToConvert: "px",
  //         propList: ["*"],
  //         fontViewportUnit: "vw",
  //         replace: true,
  //       }),
  //     ],
  //   },
  // },
});
