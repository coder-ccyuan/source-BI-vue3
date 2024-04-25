# source-BI-vue3
使用 AI 实现根据用户需求对数据的只能分析
[后端代码](https://github.com/coder-ccyuan/source-BI-backend)
## 日志

### 4.22
- 初始化项目 :ok:
### 4.23
- 搭建上传页面 :ok:
### 4.25
- 实现引入ECharts :ok:
  - ``` shell
    npm install echarts --save
    ```
  - 只有挂载完后才能操作dom
  - ``` js
       <script setup lang="js">
    import * as echarts from 'echarts';
    import {onMounted, ref} from "vue";
    
    let chart=ref();
    // 基于准备好的dom，初始化echarts实例
    onMounted(()=>{
    var myChart = echarts.init(chart.value);
    myChart.setOption({
    title: {
    text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
    {
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
    }
    ]
    });
    })
    // 绘制图表
    </script>
    
    <template>
      <div style="width: 600px;height:400px;" ref="chart"></div>
    </template>
    
    <style scoped>
    
    </style>
  - ```