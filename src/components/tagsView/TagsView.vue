<template>
  <div class="tagsView">
    <template v-for="tag in store.tagsList" :key="tag.name">
      <el-tag v-if="tag.name==='首页'" :type="tag.url===route.path ? 'success':''" effect="dark" @click="toView(tag.url)">{{tag.name}}</el-tag>
      <el-tag v-else :type="tag.url===route.path ? 'success':''" effect="dark" closable @click="toView(tag.url)" @close="handleClose(tag)">
        {{tag.name}}
      </el-tag>
    </template>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store'
import { useRouter, useRoute } from "vue-router";

const store = useCounterStore()

let router = useRouter();
let route = useRoute();

const toView = (url)=>{
  router.push({
    //传递参数使用query的话，指定path或者name都行，但使用params的话，只能使用name指定
    path: url,
    // query: {
    //   page: path,
    // },
  });
}
const handleClose = (tag)=>{
  const tagIndex = store.tagsList.findIndex(item=>item.name === tag.name)
  store.tagsList.splice(tagIndex,1)
  if (tag.url===route.path) {
    router.push({
    path: store.tagsList[tagIndex-1].url,
  });
  }
}
</script>

<style scoped>
.tagsView{
  padding: 5px 20px;
  background-color: #f0f2f5;
}
.tagsView .el-tag{
  margin-right: 8px;
  cursor: pointer;
}
.el-tag--dark{
  background-color: #409eff;
  border: none;
  border-radius: 0;
  height: 30px;
  /* color: #000; */
}
.el-tag--dark.el-tag--success{
  background-color: #42b983;
  color: #fff;
  height: 30px;
}
</style>