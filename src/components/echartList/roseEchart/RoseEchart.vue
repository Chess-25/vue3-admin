<template>
  <div>
    <Echart :option="option" :style="style"/>
  </div>
</template>

<script setup>
import Echart from '@/components/echart/Echart.vue';
import { defineProps } from "vue";
const props = defineProps({
  roseData: Object,
  style:Object
});
  let option =  {
    legend: {
      top: "bottom"
    },
    toolbox: {
      show: true,
      // feature: {
      //   mark: { show: true },
      //   dataView: { show: true, readOnly: false },
      //   restore: { show: true },
      //   saveAsImage: { show: true }
      // }
    },
    series: [
      {
        name: "面积模式",
        type: "pie",
        radius: [10, 120],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  };
</script>

<style lang="scss" scoped>

</style>