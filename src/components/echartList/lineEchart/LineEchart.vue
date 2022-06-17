<template>
  <div>
    <Echart :option="option" :style="style"/>
  </div>
</template>

<script setup>
import Echart from '@/components/echart/Echart.vue';
import { defineProps } from "vue";
const props = defineProps({
  lineData: Object,
  style:Object
});
console.log(1,props.props);
  let option = {
    tooltip: {},
    xAxis: {
      type:'category',
      data: props.lineData.xAxisData
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: '销量',
        type: 'line',
        data: props.lineData.seriesData,
      }
    ]
  }
</script>

<style lang="scss" scoped>

</style>