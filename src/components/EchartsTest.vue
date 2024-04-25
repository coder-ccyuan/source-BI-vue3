<script setup lang="js">
import * as echarts from 'echarts';
import {onMounted, ref} from "vue";

let chart=ref();
let myChart;
// 基于准备好的dom，初始化echarts实例
onMounted(()=>{
  const jsonString = '{"title":{"text":"天数与访问量关系"},"tooltip":{"trigger":"item"},"legend":{"orient":"vertical","left":"left"},"series":[{"type":"pie","radius":"50%","data":[{"name":2,"value":123},{"name":3,"value":1231},{"name":4,"value":1233}],"emphasis":{"itemStyle":{"shadowBlur":10,"shadowOffsetX":0,"shadowColor":"rgba(0, 0, 0, 0.5)"}}}]}';

// 使用 JSON.parse() 方法将 JSON 字符串转换为 JavaScript 对象
  const options = JSON.parse(jsonString);
   myChart = echarts.init(chart.value);
  myChart.setOption(options);
})

// 绘制图表
</script>

<template>
  <div style="width: 600px;height:400px;" ref="chart"></div>
</template>

<style scoped>

</style>