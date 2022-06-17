<template>
  <div class="logo">
    <img class="img" src="@/assets/img/login/logo.svg" alt="logo" />
    <span
      v-if="!Fold"
      class="title"
      >Vue3+JS</span
    >
  </div>
  <el-menu
    :default-active="activeIndex + ''"
    class="nav-menu"
    :collapse="Fold"
    text-color="#fff"
    active-text-color="#ffd04b"
    background-color="#001529"
  >
    <template v-for="menu in store.menuList">
      <el-menu-item v-if="menu.children.length===0" :index="menu.id" @click="handleMenuItemClick(menu)">
        <el-icon class="menu-icon">
          <component v-if="menu.icon" :is="menu.icon"/>
        </el-icon>
        <span>{{menu.label}}</span>
      </el-menu-item>
      <el-sub-menu v-else :index="menu.id">
        <template #title>
          <el-icon class="menu-icon">
            <component v-if="menu.icon" :is="menu.icon"/>
          </el-icon>
          <span>{{menu.label}}</span>
        </template>
        <el-menu-item v-for="item in menu.children" :index="item.id" @click="handleMenuItemClick(item)">
          <el-icon class="menu-icon">
            <component v-if="item.icon" :is="item.icon"/>
          </el-icon>
          {{item.label}}</el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { defineProps } from "vue";
import { useRouter, useRoute,onBeforeRouteUpdate } from "vue-router";
import { pathMapBreadcrumbs } from "@/utils/mapMenus"
import { useCounterStore } from '@/store'
// import { menuList } from './navMenu';

const props = defineProps({
  Fold: Boolean,
});
const store = useCounterStore()


let router = useRouter();
let route = useRoute()

let menuIndex = store.tagsList.findIndex(item=>item.url===route.path)

let bread = ref(pathMapBreadcrumbs(store.menuList, route.path))

//页面初渲染时获取store的bread
let activeIndex = ref(store.bread[1].id)
if (route.path!=="/main/home") {
  activeIndex.value = bread.value[1].id
  const tagIndex = store.tagsList.findIndex(tag => tag.name === bread.value[1].name)
  if (tagIndex===-1) {
    store.tagsList.push({name:bread.value[1].name,url:route.path,id:bread.value[1].id})
  }
}
onBeforeRouteUpdate(to=>{
  menuIndex = store.tagsList.findIndex(item=>item.url===to.path)
  activeIndex.value = store.tagsList[menuIndex].id
  bread.value = pathMapBreadcrumbs(store.menuList, to.path)
  
})
store.bread = bread
const handleMenuItemClick = (item)=>{
  activeIndex.value = item.id
  router.push({
    //传递参数使用query的话，指定path或者name都行，但使用params的话，只能使用name指定
    path: item.url,
    // query: {
    //   page: path,
    // },
  });
  const tagIndex = store.tagsList.findIndex(tag=>tag.name === item.label)
  if (tagIndex===-1) {
    store.tagsList.push({name:item.label,id:item.id,url:item.url})
  }
}
</script>

<style scoped>
.logo {
  position: sticky;
  top: 0;
  background-color: #001529;
  z-index: 999;
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.img {
  height: 100%;
  margin: 0 10px;
}

.title {
  font-size: 16px;
  font-weight: 700;
  color: white;
  user-select: none;
}
.nav-menu{
  width: 100%;
  overflow: auto;
  -moz-osx-font-smoothing: grayscale;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
.menu-icon{
  width: 18px;
  height: 18px;
}
.el-menu {
  border-right: none;
  background-color: #0c2135;
}
/* 目录 */
.el-submenu {
  /* padding-left: 50px !important; */
  background-color: #001529 !important;
}
/* 二级菜单 ( 默认背景 ) */
.el-menu-item {
  padding-left: 20px !important;
  background-color: #0c2135 !important;
}
.el-menu-item.is-active {
  color: #fff !important;
  background-color: #0a60bd !important;
}
</style>