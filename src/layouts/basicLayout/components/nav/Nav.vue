<script setup>
</script>

<template>
  <div class="container">
    <div class="header bg">Navigation Layer / Header</div>
    <div class="nav bg">Navigation Layer / Left Navbar</div>
  </div>
</template>

<style scoped>
* {
}
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
