<template>
  <div class="breadcrumb">
    <el-icon @click="onFold"><Expand v-if="isFold" /><Fold v-else/></el-icon>
    <el-breadcrumb v-if="store.bread.length>0" separator="/">
      <el-breadcrumb-item v-for="item in store.bread">
        {{item.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-breadcrumb v-else>
      <el-breadcrumb-item>
        首页
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineEmits } from "vue";
import { useCounterStore } from '@/store'

const store = useCounterStore()

let isFold = ref(false)
const emit = defineEmits(['onFold'])
const onFold = ()=>{
  isFold.value = !isFold.value
  emit('onFold',isFold)
}


</script>

<style scoped>
.breadcrumb{
  height: 100%;
  display: flex;
  align-items: center;
}
.el-icon{
  font-size: 30px;
  margin-right: 10px;
  cursor: pointer;
}
</style>