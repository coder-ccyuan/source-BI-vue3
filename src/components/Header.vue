<script setup lang="ts">
import {h, ref} from "vue";
import {BarChartOutlined, RadarChartOutlined} from "@ant-design/icons-vue";
import {MenuProps} from "ant-design-vue";

const current = ref<string[]>(['BI']);
const items = ref<MenuProps['items']>([
  {
    key: 'BI',
    icon: () => h(BarChartOutlined),
    label: 'BI数据分析',
    title: 'BI数据分析',
  }
])
</script>

<template>
    <div class="logo">
      <RadarChartOutlined style="font-size: 20px"/>source-BI
    </div>
    <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items"/>
</template>

<style scoped>
.main {
  background-color: white;
}

.logo {
  float: left;
  background: rgba(255, 255, 255, 0.3);
}
</style>