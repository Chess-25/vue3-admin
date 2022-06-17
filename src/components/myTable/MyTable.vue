<template>
  <BtnList :btnList="contentConfig.operateList"/>
  <el-table :data="tableData" border style="width: 100%" height="500px" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55" align="center"/>
    <template v-for="list in contentConfig.propList">
      <el-table-column :fixed="list.fixed" :min-width="list.minwidth" :width="list.width" :prop="list.prop" :align="list.align">
        <template #header>
          <div class="table-title">
            {{list.title}}
            <el-input v-if="list.search==='input'" size="small" v-model="input"/>
            <el-dropdown trigger="click" v-if="list.search==='filter'">
              <span class="el-dropdown-link">
                <el-input class="status" size="small" v-model="status"/>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <template v-for="item in list.filters">
                    <el-dropdown-item>
                      <div @click="statusFilter(item.text)">
                        {{item.text}}
                      </div>
                    </el-dropdown-item>
                  </template>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </template>
        <template #default="scope">
          <slot :name="list.prop" :row="scope.row">
            <div v-if="list.type==='operate'">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <el-button type="primary" :icon="Setting">{{list.title}}</el-button>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <template v-for="btn in list.operateBtns">
                      <el-dropdown-item>
                        <div :class="btn.clickFn">
                          <el-icon>
                            <component v-if="btn.icon" :is="btn.icon"/>
                          </el-icon>
                          {{btn.text}}
                      </div>
                      </el-dropdown-item>
                    </template>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
            <img class="image" v-if="list.type==='img'" :src="scope.row[list.prop]"/>
            <!-- 文字 -->
            <div v-if="list.type==='text'" class="content">
              <el-tooltip :content="scope.row[list.prop]" placement="top" :show-arrow="false" :show-after="500">
                {{scope.row[list.prop]}}
              </el-tooltip>
            </div>
          </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
  <el-pagination
    v-model:currentPage="currentPage4"
    v-model:page-size="pageSize4"
    :page-sizes="[100, 200, 300, 400]"
    :background="true"
    layout="total, sizes, prev, pager, next, jumper"
    :total="400"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script setup>
import { ref, onMounted, defineProps, defineEmits } from "vue";
import BtnList from '@/components/btnList/BtnList.vue';
import { tableOp } from '@/service/tableData'
import {
  Setting,
} from '@element-plus/icons-vue'
const props = defineProps({
  contentConfig: Object,
  modalConfig: Object,
});
let tableData = ref([])
const getData = (opType,listType,data)=>{
  tableOp(opType,listType,data).then(res=>{
    if (res.success) {
      for(let item of res.data) {
        item.key = item.iid || item.id
        item.goodsName = item.goodsName || item.title
        item.img = item.img || 'http://s11.mogucdn.com/mlcdn/c45406/180815_8fjggaaj4kd3ih9kjd956kl14f483_640x840.jpg_560x999.jpg'
        item.status = item.status || '启用'
        item.createAt = item.createAt || '2014-12-24 23:12:00'
        item.updateAt = item.updateAt || '2016-12-24 23:12:00'
      }
      tableData.value = res.data
      console.log(tableData);
    }else{
      console.log(res.message);
    }
  })
}
const handleSelectionChange = (val) => {
  console.log(val);
}
let input = ref('')
let status = ref('')

const statusFilter = (text)=>{
  status.value = text
}
onMounted(()=>{
  getData('total',props.contentConfig.type)
})
let currentPage4 = ref(4)
let pageSize4 = ref(100)
const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}
</script>

<style scoped>
.detail{
  color: #409eff;
}
.delete{
  color: #f56c6c;
}
.el-pagination{
  padding: 10px 0;
  display: flex;
  justify-content: right;
}
.image{
  width: 48px;
  height: 48px;
}
.content{
  white-space: nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
</style>
<style>
.el-table__cell{
  padding: 5px !important;
}
.el-table .cell{
  padding: 0 !important;
}
.table-title .el-input__wrapper{
  border-radius: 0 !important;
}
.status.el-input--small .el-input__inner{
  text-align: center;
}
</style>