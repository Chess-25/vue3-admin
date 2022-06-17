<template>
  <div class="user">
    <MyTable :contentConfig="contentConfig" :modalConfig="modalConfig"/>
  </div>
</template>

<script setup>
/* 配置 */
import { contentConfig } from "./config/content";
import { modalConfig } from "./config/modal";

import MyTable from '@/components/myTable/MyTable.vue';

</script>

<style scoped>
.user{
  padding:0 20px;
  background-color: #fff;
}
</style>