# Big Screen General Solution All in One

## Philosophy

- Do not encapsulate component unless it repeats itself

- Component sits as close as possible to the place where it is used

  - e.g. `src/components/Nav.vue` is used in `src/App.vue`, so `Nav.vue` is placed in `src/components` folder

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

- [gsap](https://greensock.com/docs/v3)

- [tanstack query](https://tanstack.com/query/v4/docs/vue/quick-start)

- [vueuse](https://vueuse.org/guide/)

## Compatibility

## Potential Issues

- [pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) due to layer overlapping
