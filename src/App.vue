<script setup lang="ts"></script>

<template>
  <a-layout>
    <a-layout-header class="header">Header</a-layout-header>
    <a-layout-content class="content">Content</a-layout-content>
    <a-layout-footer class="footer">Footer</a-layout-footer>
  </a-layout>
</template>

<style scoped>
.header {
  height: 50px;
  background-color: skyblue;
}

.content {
  height: 500px;
  background-color: aquamarine;
}
.footer{
  height: 30px;
  background-color: white;
}

</style>
