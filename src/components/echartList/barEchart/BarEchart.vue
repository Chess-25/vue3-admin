<template>
  <div>
    <Echart :option="option" :style="style"/>
  </div>
</template>

<script setup>
import Echart from '@/components/echart/Echart.vue';
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  barData: Object,
  style:Object
});
console.log(1,props.barData);
  let option = {
    // title: {
    //   text: '分类商品收藏',
    //   x: 'center',
    // },
    tooltip: {},
    xAxis: {
      data: props.barData.xAxisData
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: '销量',
        type: 'bar',
        data: props.barData.seriesData,
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)"
        }
      }
    ]
  }
</script>

<style lang="scss" scoped>

</style>