<template>
  <div class="home">
    <div class="body-box">
      <!-- 顶部图表 -->
      <div class="top-border">
        <div class="top-left">
          <dv-decoration-10 class="dv-dec-10" />
          <dv-decoration-8 class="dv-dec-8" />
        </div>

        <div class="big-title">
          <div>
            <dv-decoration-11 style="width:300px;height:60px;">可视化大屏</dv-decoration-11>
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
          <Center/>
        </el-col>
        <el-col :span="4">
          <dv-border-box-8>
            <div class="content">
              <CenterRight1/>
            </div>
          </dv-border-box-8>
        </el-col>
        <el-col :span="4">
          <dv-border-box-13>
            <div class="content">
              <CenterRight2/>
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

import CenterLeft1 from '@/components/dataV/centerLeft1/CenterLeft1.vue';
import CenterLeft2 from '@/components/dataV/centerLeft2/CenterLeft2.vue';
import Center from '@/components/dataV/center/Center.vue';
import CenterRight1 from '@/components/dataV/centerRight1/CenterRight1.vue';
import CenterRight2 from '@/components/dataV/centerRight2/CenterRight2.vue';
import Bottomleft from '@/components/dataV/bottomleft/Bottomleft.vue';
import BottomRight from '@/components/dataV/bottomRight/BottomRight.vue';

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
.body-box{
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
.top-left{
  width: 35%;
  display: flex;
}
.top-right{
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