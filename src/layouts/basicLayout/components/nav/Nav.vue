<script setup>
import gsap from "gsap";
import { ref, onMounted } from "vue";

const header = ref(null);
const nav = ref(null);

onMounted(() => {
  const timeline = gsap.timeline();

  timeline
    .from(header.value, {
      x: -500,
      ease: "ease.inOut",
    })
    .from(nav.value, {
      x: -100,
      ease: "ease.inOut",
    });
});
</script>

<template>
  <div class="container">
    <div class="header bg" ref="header">Logo | Header</div>
    <div class="nav bg" ref="nav">
      <ul>
        <li><router-link to="/">Home Page</router-link></li>
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
.header {
  width: 500px;
  height: 100px;
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
}
</style>
