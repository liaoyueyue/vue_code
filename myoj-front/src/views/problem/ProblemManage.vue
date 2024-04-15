<script lang="ts" setup>
import { ref, reactive } from "vue";
import { Delete, Edit } from "@element-plus/icons-vue";

const currentPage = ref(1);
const pageSize = ref(5);
const small = ref(false);
const background = ref(false);
const disabled = ref(false);
const total = ref(20);

const formInline = reactive({
  search: "",
  level: "",
});

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};

const onSubmit = () => {
  console.log("submit!");
};

const onResetting = () => {
  console.log("reseting!");
};

const tableData = ref([
  {
    id: "-1",
    title: "请联系网站管理员",
    collection: "null",
    createTime: "null",
    level: "null",
  }
]);

// 导入数据
import { problemListService } from "@/api/problem"
const getProblemList = async () => {
  let result = await problemListService(currentPage.value, pageSize.value);
  tableData.value = result.data.items;
  total.value = result.data.total;
}
getProblemList();
</script>

<template>
  <el-card>
    <div class="card-header">
      <span>题目管理</span>
      <el-button type="primary">添加题目</el-button>
    </div>
    <hr style="margin-top: 20px;">
    </hr>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="题目合集">
        <el-input v-model="formInline.search" placeholder="请输入" clearable />
      </el-form-item>
      <el-form-item label="题目等级">
        <el-select v-model="formInline.level" placeholder="请选择" clearable>
          <el-option label="简单" value="Easy" />
          <el-option label="中等" value="Medium" />
          <el-option label="困难" value="Hard" />
        </el-select>
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
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="collection" label="合集名称" />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column prop="level" label="等级" />
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
