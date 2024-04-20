<script lang="ts" setup>
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { Delete, Edit } from "@element-plus/icons-vue";
import type { FormInstance, FormRules } from "element-plus";

// # 题目合集表格
const currentPage = ref(1);
const pageSize = ref(10);
const small = ref(false);
const background = ref(false);
const disabled = ref(false);
const total = ref(20);

const searchForm = reactive({
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

// 导入题目合集表格数据
import { collectionListService } from "@/api/collection"
const getcollectionList = async () => {
  let result = await collectionListService(currentPage.value, pageSize.value, searchForm.search);
  tableData.value = result.data.items;
  total.value = result.data.total;
}
getcollectionList();

// # 添加题目合集添加弹窗
const dialogVisible = ref(false);

// 添加合集表单数据和验证规则
interface AddCollectionForm {
  name: string;
  description: string;
}

const addCollectionFormRef = ref<FormInstance>();
const addCollectionForm = reactive<AddCollectionForm>({
  name: "",
  description: ""
});

const loginRules = reactive<FormRules<AddCollectionForm>>({
  name: [
    { required: true, message: "请输入需要添加合集的名称", trigger: "blur" }
  ],
  description: [
    { required: true, message: "请输入需要添加合集的描述", trigger: "blur" }
  ]
});

// 添加合集函数
import { addCollectionService } from "@/api/collection";
const addCollection = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      let result = await addCollectionService(addCollectionForm);
      ElMessage.success("添加成功");
      // 刷新表格
      getcollectionList();
      dialogVisible.value = false;
    }
  });
};
</script>

<template>
  <el-card>
    <div class="card-header">
      <span>题目合集管理</span>
      <el-button type="primary" @click="dialogVisible = true">添加题目合集</el-button>
    </div>
    <hr style="margin-top: 20px;">
    </hr>
    <el-form :inline="true" :model="searchForm" class="demo-form-inline">
      <el-form-item label="题目合集">
        <el-input v-model="searchForm.search" placeholder="请输入" clearable />
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
  <!-- 添加弹窗 -->
  <el-dialog v-model="dialogVisible" title="添加合集" width="500">
    <!-- 添加合集表单 -->
    <el-form ref="addCollectionFormRef" :model="addCollectionForm" :rules="loginRules" class="addCollection-form"
      label-width="auto" style="max-width: 600px">
      <el-form-item label="合集名称" prop="name">
        <el-input v-model="addCollectionForm.name" placeholder="请输入合集名称" />
      </el-form-item>
      <el-form-item label="合集描述" prop="description">
        <el-input v-model="addCollectionForm.description" placeholder="请输入合集描述" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addCollection(addCollectionFormRef)">确认</el-button>
      </div>
    </template>
  </el-dialog>
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
