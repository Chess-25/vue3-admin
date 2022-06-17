<template>
  <div class="cneterLeft1">
    <div class="title">
      <i class="iconfont icon-layer-group" />
      <span>地图数据</span>
      <dv-decoration-1 class="dv-dec-3" />
    </div>
    <div class="echart" :style="{ height: '300px', width: '100%' }" ref="baseEchartRef"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
import gd from "./data/guangdong.json";
import { convertData } from "@/utils/convertData";
//静态导入echart数据
import {
  guangdong,
} from '../echartData'
let baseEchartRef = ref()
const initEchart = () => {
  echarts.registerMap("guangdong", gd);
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(baseEchartRef.value);
  // 绘制图表
  myChart.setOption(option);
  // 监听window尺寸的变化
  window.addEventListener("resize", () => {
    myChart.resize();
  });
}
onMounted(() => {
  initEchart()
})
let option = {
  showLegendSymbol: true,
  tooltip: {
    trigger: 'item',
    textStyle: {
      fontSize: 14,
      lineHeight: 22,
    },
    position: point => {
      // 固定在顶部
      return [point[0] + 50, point[1] - 20];
    },
    // 如果需要自定义 tooltip样式，需要使用formatter
    /*
      formatter: params => {
        return `<div style=""> ... </div>`
      }
    */
  },
  // 如果需要根据不同的数据展示深浅不一的颜色，则把这里打开
  // visualMap: {
  //   min: 0,
  //   max: 10,
  //   show: false,
  //   seriesIndex: 0,
  //   // 颜色
  //   inRange: {
  //     color: ['rgba(41,166,206, .5)', 'rgba(69,117,245, .9)'],
  //   },
  // },
  // 底部背景
  geo: [{
    show: true,
    aspectScale: 0.85, //长宽比
    zoom: 1.16,
    // top: '10%',设置地图位置
    // left: '17%',
    map: 'guangdong',
    roam: false,
    itemStyle: {
      borderColor: '#7ad5ff7f',
      shadowOffsetY: 5,
      shadowBlur: 15,
      areaColor: 'rgba(5,21,35,0.1)'
    }
  }],
  series: [
    {
      name: '销量',
      type: 'map',
      aspectScale: 0.85, //长宽比
      zoom: 1.16, //缩放
      map: 'guangdong', // 自定义扩展图表类型
      // top: '9%',
      // left: '16%',
      itemStyle: {
        // 背景渐变色
        areaColor: {
          type: 'linear-gradient',
          x: 0,
          y: 300,
          x2: 0,
          y2: 0,
          colorStops: [{
            offset: 0,
            color: 'RGBA(19,96,187,1)' // 0% 处的颜色
          }, {
            offset: 1,
            color: 'RGBA(7,193,223,1)' // 50% 处的颜色
          }],
          global: true // 缺省为 false
        },
        borderColor: '#4ECEE6',
        borderWidth: 1,
        // emphasis: {
        //   areaColor: '#4f7fff',
        //   borderColor: 'rgba(0,242,252,.6)',
        //   borderWidth: 2,
        //   shadowBlur: 10,
        //   shadowColor: '#00f2fc',
        // },
      },
      emphasis: {
        itemStyle:{
          areaColor: '#4f7fff',
          borderColor: 'rgba(0,242,252,.6)',
          borderWidth: 2,
          shadowBlur: 10,
          shadowColor: '#00f2fc',
        },
      },
      label: {
        formatter: params => `${params.name}`,
        show: true,
        position: 'insideRight',
        fontSize: 14,
        color: '#fff',
        // emphasis: {
        //   color: '#fff',
        // },
      },
      data: guangdong
    },
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      symbolSize: 7,
      effectType: 'ripple',
      legendHoverLink: false,
      showEffectOn: 'render',
      rippleEffect: {
        period: 4,
        scale: 2.5,
        brushType: 'stroke',
      },
      zlevel: 1,
      itemStyle: {
        color: '#99FBFE',
        shadowBlur: 5,
        shadowColor: '#fff',
      },
      data: convertData(guangdong),
    },
  ],
}
</script>

<style scoped>
.cneterLeft1 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(19, 25, 47, 0.6);
}

.title {
  display: flex;
  align-items: center;
  color: #c3cbde;
  font-size: 12px;
  padding: 10px;
}

.title i {
  width: 16px;
  height: 16px;
  margin-right: 5px;
  color: rgb(113, 187, 248);
}

.dv-dec-3 {
  width: 50%;
  height: 20px;
}
</style>