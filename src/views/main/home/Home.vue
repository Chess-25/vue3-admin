<template>
  <img v-if="snapshotUrl" :src="snapshotUrl">
  <div class="home" ref="home_ref">
    <div class="body-box">
      <!-- 顶部图表 -->
      <div class="top-border">
        <div class="top-left">
          <dv-decoration-10 class="dv-dec-10" />
          <dv-decoration-8 class="dv-dec-8" />
        </div>

        <div class="big-title">
          <div @click="snapshotClick">
            <dv-decoration-11 style="width:300px;height:60px;">可视化大屏（生成截图）</dv-decoration-11>
          </div>
        </div>
        <div class="top-right">
          <dv-decoration-8 class="dv-dec-8-s" />
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>
      </div>
      <el-row class="top-row" :gutter="10">
        <el-col :span="4">
          <dv-border-box-12>
            <div class="content">
              <CenterLeft1 />
            </div>
          </dv-border-box-12>
        </el-col>
        <el-col :span="4">
          <dv-border-box-1>
            <div class="content">
              <CenterLeft2 />
            </div>
          </dv-border-box-1>
        </el-col>
        <el-col :span="8">
          <Center />
        </el-col>
        <el-col :span="4">
          <dv-border-box-8>
            <div class="content">
              <CenterRight1 />
            </div>
          </dv-border-box-8>
        </el-col>
        <el-col :span="4">
          <dv-border-box-13>
            <div class="content">
              <CenterRight2 />
            </div>
          </dv-border-box-13>
        </el-col>
      </el-row>
      <!-- 底部图表 -->
      <el-row :gutter="10">
        <el-col :span="12">
          <dv-border-box-12>
            <div class="content">
              <Bottomleft />
            </div>
          </dv-border-box-12>
        </el-col>
        <el-col :span="12">
          <dv-border-box-12>
            <div class="content">
              <BottomRight />
            </div>
          </dv-border-box-12>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import html2canvas from 'html2canvas';

import CenterLeft1 from '@/components/dataV/centerLeft1/CenterLeft1.vue';
import CenterLeft2 from '@/components/dataV/centerLeft2/CenterLeft2.vue';
import Center from '@/components/dataV/center/Center.vue';
import CenterRight1 from '@/components/dataV/centerRight1/CenterRight1.vue';
import CenterRight2 from '@/components/dataV/centerRight2/CenterRight2.vue';
import Bottomleft from '@/components/dataV/bottomleft/Bottomleft.vue';
import BottomRight from '@/components/dataV/bottomRight/BottomRight.vue';

//获取dom元素
const home_ref = ref(null);
const snapshotUrl = ref(null)
const snapshotClick = () => {
  toImage()
}
// 任务流程截图
const toImage = () => {
  // 获取父标签，意思是这个标签内的 DOM 元素生成图片
  // task_edit_ref是给截图范围内的父级元素自定义的ref名称
  const canvasBox = home_ref
  const scale = 1;
  // 手动创建一个 canvas 标签
  let canvas = document.createElement("canvas")

  if (canvasBox) {
    // 获取父级的宽高
    // const width = 236//自定义宽度
    // const height = 110//自定义高度
    const width = canvasBox.value?.clientWidth//根据组件大小获取宽 
    const height = canvasBox.value?.clientHeight//根据组件大小获取高
    canvas.width = width * scale;
    canvas.height = height * scale;
    // canvas.getContext("2d").scale(0.19, 0.15);//调整截图后的图片大小
    canvas.getContext("2d").scale(1, 1);//调整截图后的图片大小
    const options = {
      backgroundColor: null, // 设置背景色为透明
      canvas: canvas,
      useCORS: true, //是否尝试使用CORS从服务器加载图像，解决跨域问题
      tainttest: true, // 是否在渲染前测试图片
      logging: false, // 不启动日志调试
      scrollY: 0, //防止滚动偏移
      scrollX: 0, //防止滚动偏移
    }
    // canvasBox是要截图的元素，options是一些相关配置
    html2canvas(canvasBox.value, options).then((canvas) => {
      // toDataURL 图片格式转成 base64
      let snapshot = canvas.toDataURL("image/jpeg", 0.5) //图片格式转为jpeg压缩图片清晰度
      // let snapshot = canvas.toDataURL("image/png", 0.5)
      if (snapshot) {
        //截图信息上传
        snapshotUrl.value = snapshot
        // console.log(snapshot);
      }
    })
  }
}

</script>

<style scoped>
.home {
  width: 100%;
  /* height: 100%; */
  /* padding: 10px; */
  background-image: url('@/assets/img/big-screen/pageBg.png');
  background-size: cover;
  background-position: center center;
}

.body-box {
  padding: 15px;
}

.top-row {
  margin: 10px 0;
}

.content {
  height: calc(100% - 30px);
  padding: 15px;
}

.top-border {
  display: flex;
  width: 100%;
}

.big-title {
  width: 30%;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
}

.top-left {
  width: 35%;
  display: flex;
}

.top-right {
  width: 35%;
  display: flex;
}

.dv-dec-6 {
  width: 250px;
  height: 8px;
  margin-top: 20px;
}

.dv-dec-10,
.dv-dec-10-s {
  height: 5px;
}

.dv-dec-8,
.dv-dec-8-s {
  width: 200px;
  height: 50px;
}

.dv-dec-10-s,
.dv-dec-8-s {
  transform: rotateY(180deg);
}

.data-top {
  display: flex;
}
</style>