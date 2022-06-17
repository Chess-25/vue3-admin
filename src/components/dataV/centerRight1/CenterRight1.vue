<template>
  <div class="cneterLeft1">
    <div class="bg-color-black">
      <div class="title">
        <i class="iconfont icon-align-left" />
        <span>产品销售渠道分析</span>
      </div>
      <dv-capsule-chart class="dv-cap-chart" :config="config" />
      <Echart :option="option" :style="{ height: '200px', width: '100%' }" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Echart from '@/components/echart/Echart.vue';

const config = reactive({
  data: [
    {
      name: '南阳',
      value: 167
    },
    {
      name: '周口',
      value: 67
    },
    {
      name: '漯河',
      value: 123
    },
    {
      name: '郑州',
      value: 55
    },
    {
      name: '西峡',
      value: 98
    }
  ]
})
let option = {
  // legend: {
  //   data: ['Allocated Budget', 'Actual Spending']
  // },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: '广州', min:0, max: 6500 },
      { name: '深圳', min:0, max: 16000 },
      { name: '佛山', min:0, max: 30000 },
      { name: '东莞', min:0, max: 38000 },
      { name: '珠海', min:0, max: 52000 },
      { name: '肇庆', min:0, max: 25000 }
    ],
    
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending'
        }
      ]
    }
  ]
};
</script>

<style scoped>
.cneterLeft1 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(19, 25, 47, 0.6);
}
/* .bg-color-black{
  border-radius: 10px;
  background-color: rgba(19, 25, 47, 0.6)
} */
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

.dv-cap-chart {
  width: 100%;
  height: 140px;
}
</style>