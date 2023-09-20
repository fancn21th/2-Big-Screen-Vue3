# Big Screen General Solution All in One

## Philosophy

- Do not encapsulate component unless it repeats itself

- Component sits as close as possible to the place where it is used

  - e.g. `src/components/Nav.vue` is used in `src/App.vue`, so `Nav.vue` is placed in `src/components` folder

## Rules

### Common

- self-governing

  - this is the NO.1 rule overall

    each component should be self-governing, which means it should be able to work independently without any other components

    - fetch data by itself
    - apply the global theme by itself
    - get the global config by itself
    - get the global state by itself

### Components Hierarchy / Folder Structure

- 一级路由组件 (只有路由没有实体组件)
  - 二级路由组件 (在 pages 下面 )
    - 地图组件
    - 三级路由组件 (在 子 pages 下面 )
      - Grid Layout 组件 (Charts)
      - 业务组件 ( > 1 个)
        - 渲染组件
          - Echart 类型 (引用 1\*)
          - Vue 类型 (引用 2\*)
- 全局组件 (components)
  - Echart 类型 (定义 1\*)
  - Vue 类型 (定义 2\*)

### 组件

- 文件夹 小写
  - 组件 与文件夹同名 首字母大写

### Echart Components

### Vue Components

## Features

- Layering

  there are 4 layers in the given demo, they are nav, charts, map, background. It is also common you have more than 4 layers.

  - logically nested

    nav layer and background layer are logically parent of the rest of layers

  - physically sibling

    on the other hand those four layers are physically sibling

- Animation

  - Components in / out
  - Control at page level

- State Management

  - Cache Page Level Query Params

- Service/API Agent
  - Cache
  - Auto Retry

## References

- [vue3-grid-layout-next](https://jbaysolutions.github.io/vue-grid-layout/guide/usage.html)

  - `caution !` this doc is for vue 2 version since the vue 3 version is just another fork for vue 3 compatibility, no doc created specifically for vue 3 version and most of api should be compatible

  - you better read this [API in sourcecode](https://github.com/xhlife/vue3-grid-layout/blob/master/src/components/Grid/GridLayout.vue) as API reference

- [gsap](https://greensock.com/docs/v3)

- [tanstack query](https://tanstack.com/query/v4/docs/vue/quick-start)

- [vueuse](https://vueuse.org/guide/)

## Compatibility

## Potential Issues

- Pointer Events Lost due to Overlapping

  to fix this issue some css properties need to be used with combination

  - the `visibility` property
  - [pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)
