<template>
  <div class="btn-list">
    <el-button :type="btn.type" v-for="btn in btnList">
      <el-icon class="btn-icon">
        <component v-if="btn.icon" :is="btn.icon"/>
      </el-icon>
      {{btn.text}}
    </el-button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  btnList: Array,
});
</script>

<style scoped>
.btn-list{
  padding: 20px 0;
}
.el-button{
  border-radius: 0px;
  width: 70px;
}
.btn-icon{
  margin-right: 5px;
}
</style>