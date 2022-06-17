<template>
  <el-container class="main">
    <el-aside :width="Fold ? '66px' : '200px'"><NavMenu :Fold="Fold"/></el-aside>
    <el-container>
      <el-header>
        <Breadcrumb @onFold="onFold"/>
      </el-header>
      <TagsView/>
      <el-main>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive"/>
          </keep-alive>
          <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive"/>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import { ref } from 'vue';

import NavMenu from '@/components/navMenu/NavMenu.vue';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import TagsView from '@/components/tagsView/TagsView.vue';

let Fold = ref(false)

const onFold = (isFold)=>{
  Fold.value = isFold.value
}
</script>
<style scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.el-aside {
  white-space: nowrap;
  background-color: #001529;
  transition: width 0.3s linear;
  -ms-overflow-style: none;
  -moz-osx-font-smoothing: grayscale;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
.el-aside::-webkit-scrollbar{
  display: none !important;
  width: 0 !important;
}
.el-header{
  height: 48px;
}
.el-main{
  background-color: #f0f2f5;
  padding: 0 20px;
}
</style>