<template>
  <div>
    <Echart :option="option" :style="style"/>
  </div>
</template>

<script setup>
import Echart from '@/components/echart/Echart.vue';
/* 工具库 */
import { convertData } from "../utils/convertData";
import { defineProps } from "vue";
const props = defineProps({
  mapData: Object,
  style:Object
});
  let option = {
    title: {
      text: "全国销量统计",
      left: "center",
      textStyle: {
        color: "#000"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: function(params) {
        return params.name + " : " + params.value[2];
      }
    },
    visualMap: {
      min: 0,
      max: 60000,
      left: 20,
      bottom: 20,
      calculable: true,
      text: ["高", "低"],
      inRange: {
        color: [
          "rgb(70, 240, 252)",
          "rgb(250, 220, 46)",
          "rgb(245, 38, 186)"
        ]
      },
      textStyle: {
        color: "#000"
      }
    },
    geo: {
      map: "china",
      roam: "scale",
      emphasis: {
        areaColor: "#f4cccc",
        borderColor: "rgb(9, 54, 95)",
        itemStyle: {
          areaColor: "#f4cccc"
        }
      }
    },
    series: [
      {
        name: "销量",
        type: "scatter",
        coordinateSystem: "geo",
        data: convertData(props.mapData),
        symbolSize: 12,
        emphasis: {
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 1
          }
        }
      },
      {
        type: "map",
        map: "china",
        geoIndex: 0,
        aspectScale: 0.75,
        tooltip: {
          show: false
        }
      }
    ]
  };
</script>

<style lang="scss" scoped>

</style>