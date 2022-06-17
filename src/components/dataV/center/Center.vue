<template>
  <div>
    <div class="top">
      <el-row class="top-row" :gutter="5">
        <el-col :span="8" v-for="item in titleItem" :key="item.title" class="row">
          <div class="row-item">
            <div class="item-title">{{ item.title }}</div>
            <div>
              <dv-digital-flop class="dv-dig-flop ml-1 mt-1 pl-3" :config="item.config" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bottom">
      <div class="ranking bg-color-black">
        <div class="title">
          <i class="iconfont icon-tongji2" />
          <span>年度负责人组件达标榜</span>
        </div>
        <dv-scroll-ranking-board class="dv-scr-rank-board" :config="ranking" />
      </div>
      <div class="percent">
        <div class="percent-item bg-color-black">
          <div class="item">
            <span>今日任务通过率</span>
            <Echart :option="rate[0]" :style="{ height: '100px', width: '100%' }" />
          </div>
          <div>
            <span>今日任务达标率</span>
            <Echart :option="rate[1]" :style="{ height: '100px', width: '100%' }" />
          </div>
        </div>
        <div class="water">
          <dv-water-level-pond class="dv-wa-le-po" :config="water" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import Echart from '@/components/echart/Echart.vue';
// 下层数据
const titleDate = [
  {
    number: 1020,
    text: '今年累计任务建次数'
  },
  {
    number: 18,
    text: '本月累计任务次数'
  },
  {
    number: 4,
    text: '今日累计任务次数'
  },
  {
    number: 71,
    text: '今年失败任务次数'
  },
  {
    number: 949,
    text: '今年失败成功次数'
  },
  {
    number: 811,
    text: '今年达标任务个数'
  },
]
const titleItem = reactive([])
// 设置数据
const setData = () => {
  titleDate.map(e => {
    titleItem.push({
      title: e.text,
      config: {
        number: [e.number],
        toFixed: 1,
        textAlign: 'left',
        content: '{nt}',
        style: {
          fontSize: 26
        }
      }
    })
  })
}

const ranking = reactive({
  data: [
    {
      name: '周口',
      value: 55
    },
    {
      name: '南阳',
      value: 120
    },
    {
      name: '西峡',
      value: 78
    },
    {
      name: '驻马店',
      value: 66
    },
    {
      name: '新乡',
      value: 80
    },
    {
      name: '新乡2',
      value: 80
    },
    {
      name: '新乡3',
      value: 80
    },
    {
      name: '新乡4',
      value: 80
    },
    {
      name: '新乡5',
      value: 80
    },
    {
      name: '新乡6',
      value: 80
    }
  ],
  carousel: 'single',
  unit: '人'
})

const water = reactive({
  data: [24, 45],
  shape: 'roundRect',
  formatter: '{value}%',
  waveNum: 3
})
let rate = [
  {
    title: {
      text: "60" + "%",
      x: "center",
      y: "center",
      textStyle: {
        color: '#3fc0fb',
        fontSize: 16
      }
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: ["75%", "80%"],
        center: ["50%", "50%"],
        label: {
          show: false
        },
        data: [
          {
            value: '60',
            itemStyle: {
              color: '#03a9f4'
            },
            label: {
              show: true
            }
          },
          {
            value: '40',
            itemStyle: {
              color: '#00bcd44a'
            },
          }
        ]
      }
    ]
  },
  {
    title: {
      text: "40" + "%",
      x: "center",
      y: "center",
      textStyle: {
        color: '#67e0e3',
        fontSize: 16
      }
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: ["75%", "80%"],
        center: ["50%", "50%"],
        label: {
          show: false
        },
        data: [
          {
            value: '40',
            itemStyle: {
              color: '#ff9800'
            },
            label: {
              show: true
            }
          },
          {
            value: '60',
            itemStyle: {
              color: '#faf3a378'
            },
          }
        ]
      }
    ]
  }
]
// 初始化数据
onMounted(() => {
  setData()
})
</script>

<style scoped>
.top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: #257dff;
  margin-top: 15px;
}

.row-item {
  font-size: 12px;
  background-color: rgba(19, 25, 47, 0.6);
  border-radius: 6px;
  padding: 5px;
  margin-bottom: 5px;
}

.item-title {
  margin: 5px 0;
}

.dv-dig-flop {
  width: 100%;
  height: 30px;
}

.dv-scr-rank-board {
  height: 210px;
}

.bottom {
  display: flex;
  justify-content: space-between;
}

.ranking {
  width: 53%;
  padding: 10px;
}

.percent {
  width: 41%;
}

.title {
  display: flex;
  align-items: center;
  color: #c3cbde;
  font-size: 12px;
  margin-top: 5px;
}

.title i {
  width: 16px;
  height: 16px;
  margin-right: 5px;
  color: rgb(113, 187, 248);
}
.percent-item {
  display: flex;
  font-size: 12px;
  color: #fff;
  margin-bottom: 5px;
  justify-content: space-around;
  padding-top: 10px;
}

.dv-wa-le-po {
  height: 120px;
}
.bg-color-black{
  border-radius: 5px;
  background-color: rgba(19, 25, 47, 0.6);
}
</style>