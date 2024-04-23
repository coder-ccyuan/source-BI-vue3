<script setup lang="ts">
import {GithubFilled} from '@ant-design/icons-vue';
import Header from "./components/Header.vue";
</script>

<template>
  <a-layout>
    <a-layout-header class="header">
      <Header></Header>
    </a-layout-header>
    <a-layout-content class="content">
      <router-view></router-view>
    </a-layout-content>
    <a-layout-footer class="footer">
      <a href="https://github.com/coder-ccyuan/source-BI-vue3"><GithubFilled style="font-size: 20px" />GitHub</a>
    </a-layout-footer>
  </a-layout>
</template>

<style scoped>
.header {
  background-color: white;
}

.content {
  padding: 20px;
  margin: 20px;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  text-align: center;
  padding: 20px;
}

</style>
