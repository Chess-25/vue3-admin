<template>
  <div class="centerLeft1">
    <div class="content">
      <div class="title">
        <i class="iconfont icon-vector" />
        <span>任务完成排行榜</span>
      </div>
      <dv-scroll-board class="dv-scr-board" :config="config" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
//静态导入echart数据
const config = reactive({
  header: ['组件', '分支', '覆盖率'],
  data: [
    ['组件1', 'dev-1', "<span  class='colorGrass'>↑75%</span>"],
    ['组件2', 'dev-2', "<span  class='colorRed'>↓33%</span>"],
    ['组件3', 'dev-3', "<span  class='colorGrass'>↑100%</span>"],
    ['组件4', 'rea-1', "<span  class='colorGrass'>↑94%</span>"],
    ['组件5', 'rea-2', "<span  class='colorGrass'>↑95%</span>"],
    ['组件6', 'fix-2', "<span  class='colorGrass'>↑63%</span>"],
    ['组件7', 'fix-4', "<span  class='colorGrass'>↑84%</span>"],
    ['组件8', 'fix-7', "<span  class='colorRed'>↓46%</span>"],
    ['组件9', 'dev-2', "<span  class='colorRed'>↓13%</span>"],
    ['组件10', 'dev-9', "<span  class='colorGrass'>↑76%</span>"]
  ],
  rowNum: 7, //表格行数
  headerHeight: 35,
  headerBGC: '#0f1325', //表头
  oddRowBGC: '#0f1325', //奇数行
  evenRowBGC: '#171c33', //偶数行
  index: true,
  columnWidth: [50],
  align: ['center']
})
</script>

<style scoped>
.centerLeft1 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(19, 25, 47, 0.6);
}
.content{
  width: 100%;
  height: 100%;
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

.dv-scr-board {
  width: 100%;
  height: 340px;
  margin-top: 10px;
}
</style>