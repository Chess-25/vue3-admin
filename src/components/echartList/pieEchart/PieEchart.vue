<template>
  <div>
    <Echart :option="option" :style="style"/>
  </div>
</template>

<script setup>
import Echart from '@/components/echart/Echart.vue';
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  pieData: Object,
  style:Object
});
  let option = {
    tooltip: {
      trigger: "item"
    },
    legend: {
      orient: "horizontal",
      left: "left"
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "50%",
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };
</script>

<style lang="scss" scoped>

</style>