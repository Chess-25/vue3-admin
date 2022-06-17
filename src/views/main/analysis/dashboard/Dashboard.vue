<template>
  <div>
    <!-- 顶部图表 -->
    <el-row class="top-row" :gutter="10">
      <el-col :span="8">
        <div class="title">数据统计</div>
        <div class="content"><PieEchart :pieData="statisticData" :style="style"/></div>
      </el-col>
      <el-col :span="8">
        <div class="title">全国城市商品销量</div>
        <div class="content"><MapEchart :mapData="addressGoodSaleData" :style="style"/></div>
      </el-col>
      <el-col :span="8">
        <div class="title">分类商品数量(玫瑰图)</div>
        <div class="content"><RoseEchart :roseData="categoryGoodsData" :style="style"/></div>
      </el-col>
    </el-row>
    <!-- 底部图表 -->
    <el-row :gutter="10">
      <el-col :span="12">
        <div class="title">分类商品的销量</div>
        <div class="content"><LineEchart :lineData="categoryGoodSaleData" :style="style"/></div>
      </el-col>
      <el-col :span="12">
        <div class="title">分类商品收藏</div>
        <div class="content"><BarEchart :barData="categoryGoodFaverData" :style="style"/></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import PieEchart from '@/components/echartList/pieEchart/PieEchart.vue';
import MapEchart from '@/components/echartList/mapEchart/MapEchart.vue';
import RoseEchart from '@/components/echartList/roseEchart/RoseEchart.vue';
import LineEchart from '@/components/echartList/lineEchart/LineEchart.vue';
import BarEchart from '@/components/echartList/barEchart/BarEchart.vue';
//静态导入echart数据
import {
  statisticData,
  addressGoodSaleData,
  categoryGoodsData,
  categoryGoodSaleData,
  categoryGoodFaverData
} from './echartData'

let style = {
  with:'100%',
  height:'300px'
}
</script>

<style scoped>
.top-row{
  margin-bottom: 10px;
}
.title{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: #fff;
  margin-bottom: 1px;
}
.content{
  padding: 20px;
  background-color: #fff;
}
</style>