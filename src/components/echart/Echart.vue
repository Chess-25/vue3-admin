<template>
  <div
    class="echart"
    :style="style"
    ref="baseEchartRef"
  ></div>
</template>

<script setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import * as echarts from 'echarts'
import chinaMapData from "./data/china.json";
const props = defineProps({
  option: Object,
  style:Object
});

// let height = '300px'
//初始化
let baseEchartRef = ref()
const initEchart = ()=>{
  echarts.registerMap("china", chinaMapData);
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(baseEchartRef.value);
  // 绘制图表
  myChart.setOption(props.option);
  // 监听window尺寸的变化
  window.addEventListener("resize", () => {
    myChart.resize();
  });
}
onMounted(()=>{
  initEchart()
})
</script>

<style scoped>
</style>