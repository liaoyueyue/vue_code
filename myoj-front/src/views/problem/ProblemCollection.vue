<script lang="ts" setup>
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import { Delete, Edit } from "@element-plus/icons-vue";

const currentPage = ref(1);
const pageSize = ref(5);
const small = ref(false);
const background = ref(false);
const disabled = ref(false);
const total = ref(20);

const formInline = reactive({
  search: ""
});

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
  getcollectionList();
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
  getcollectionList();
};

const onSubmit = () => {
  getcollectionList();
};

const onResetting = () => {
  ElMessage.success("重置成功");
};

const tableData = ref();

// 导入数据
import { collectionListService } from "@/api/collection"
const getcollectionList = async () => {
  let result = await collectionListService(currentPage.value, pageSize.value, formInline.search);
  tableData.value = result.data.items;
  total.value = result.data.total;
}
getcollectionList();
</script>

<template>
  <el-card>
    <div class="card-header">
      <span>题目合集管理</span>
      <el-button type="primary">添加题目合集</el-button>
    </div>
    <hr style="margin-top: 20px;">
    </hr>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="题目合集">
        <el-input v-model="formInline.search" placeholder="请输入" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="default" @click="onResetting">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="编号" />
      <el-table-column prop="name" label="合集名" />
      <el-table-column prop="description" label="描述" />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column prop="updateTime" label="更新时间" />
      <el-table-column prop="operation" label="操作" width="180">
        <el-row>
          <el-button type="primary" :icon="Edit" circle />
          <el-button type="danger" :icon="Delete" circle />
        </el-row>
      </el-table-column>
    </el-table>
    <el-pagination class="el-p" v-model:current-page="currentPage" v-model:page-size="pageSize"
      :page-sizes="[5, 10, 15, 20]" :small="small" :disabled="disabled" :background="background"
      layout="jumper, total, sizes, prev, pager, next" :total="total" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </el-card>
</template>

<style scoped>
.el-p {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}

.card-header {
  display: flex;
  justify-content: space-between;
}
</style>
