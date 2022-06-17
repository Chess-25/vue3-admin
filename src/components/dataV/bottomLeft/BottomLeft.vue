<template>
  <div class="cneterLeft1">
    <div class="title">
      <i class="iconfont icon-chart-line" />
      <span>数据统计图</span>
      <dv-decoration-6 class="dv-dec-3" />
    </div>
    <RoseEchart :roseData="categoryGoodsData" :style="{height:'300px',width:'100%'}"/>
  </div>
</template>

<script setup>
import RoseEchart from '@/components/echartList/roseEchart/RoseEchart.vue';
//静态导入echart数据
import {
  statisticData,
  addressGoodSaleData,
  categoryGoodsData,
  categoryGoodSaleData,
  categoryGoodFaverData
} from '../echartData'
// formatter: function (params) {
    //   return params.seriesName + '<br/>' + params.name + " : " + guangdong[guangdong.findIndex(item=>item.name===params.name)].value;
    // },
</script>

<style scoped>
.cneterLeft1{
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(19, 25, 47, 0.6);
}
.title{
  display: flex;
  align-items: center;
  color: #c3cbde;
  font-size: 12px;
  padding: 10px;
}
.title i{
  width: 16px;
  height: 16px;
  margin-right: 5px;
  color: rgb(113, 187, 248);
}
.dv-dec-3{
  width: 50%;
  height: 20px;
}
</style>