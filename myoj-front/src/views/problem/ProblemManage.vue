<script lang="ts" setup>
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { Delete, Edit } from "@element-plus/icons-vue";
import type { FormInstance, FormRules } from "element-plus";

// # 题目表格
const currentPage = ref(1);
const pageSize = ref(10);
const small = ref(false);
const background = ref(false);
const disabled = ref(false);
const total = ref();

const searchForm = reactive({
  collectionName: "",
  level: "",
});

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
  getProblemList();
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
  getProblemList();
};

const onSubmit = () => {
  getProblemList();
};

const onResetting = () => {
  searchForm.collectionName = "";
  searchForm.level = "";
  getProblemList();
  ElMessage.success("重置成功");
};

const tableData = ref();

// 导入题目表格数据
import { problemListService } from "@/api/problem";
const getProblemList = async () => {
  let result = await problemListService(
    currentPage.value,
    pageSize.value,
    searchForm
  );
  tableData.value = result.data.items;
  total.value = result.data.total;
};
getProblemList();

// # 题目 添加抽屉 & 编辑抽屉 & 确认删除弹框
import type { DrawerProps } from "element-plus";

const addProblemDrawer = ref(false);
const direction = ref<DrawerProps["direction"]>("rtl");
const handleClose = (done: () => void) => {
  ElMessageBox.confirm("你确定要关闭吗？")
    .then(() => {
      clearProblemForm();
      done();
    })
    .catch(() => {
      // catch error
    });
};

// # 题目添加表单
interface ProblemForm {
  title: string;
  level: string;
  collectionId: number;
  description: string;
  templateCode: string;
  testCode: string;
}
const problemFormRef = ref<FormInstance>();
const problemForm = reactive<ProblemForm>({
  title: "",
  level: "",
  collectionId: null,
  description: "",
  templateCode: "",
  testCode: "",
});
const problemRules = reactive<FormRules<ProblemForm>>({
  title: [
    { required: true, message: "请输入需要添加题目的标题", trigger: "blur" },
  ],
  level: [{ required: true, message: "请选择有效的题目等级", trigger: "blur" }],
  collectionId: [
    {
      required: true,
      message: "请输入需要添加题目的合集编号",
      trigger: "blur",
    },
  ],
  description: [
    { required: true, message: "请输入需要添加题目的描述", trigger: "blur" },
  ],
  templateCode: [
    {
      required: true,
      message: "请输入需要添加题目的模板代码",
      trigger: "blur",
    },
  ],
  testCode: [
    {
      required: true,
      message: "请输入需要添加题目的测试代码",
      trigger: "blur",
    },
  ],
});
// 清空题目表单数据函数
const clearProblemForm = () => {
  problemForm.title = "";
  problemForm.level = "";
  problemForm.description = "";
  problemForm.collectionId = null;
  problemForm.templateCode = "";
  problemForm.testCode = "";
};

import { addProblemService } from "@/api/problem";
// 添加题目函数
const addProblem = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      let result = await addProblemService(problemForm);
      ElMessage.success("添加成功");
      getProblemList(); // 刷新表格
      addProblemDrawer.value = false; // 关闭抽屉
    }
  });
};
</script>

<template>
  <el-card>
    <div class="card-header">
      <span style="font-size: larger; font-weight: bold">题目管理</span>
      <el-button type="primary" @click="addProblemDrawer = true"
        >添加题目</el-button
      >
    </div>
    <hr style="margin-top: 20px" />
    <el-form :inline="true" :model="searchForm" class="demo-form-inline">
      <el-form-item label="合集名称">
        <el-input
          v-model="searchForm.collectionName"
          placeholder="请输入"
          clearable
        />
      </el-form-item>
      <el-form-item label="等级">
        <el-select v-model="searchForm.level" placeholder="请选择" clearable>
          <el-option label="简单" value="简单" />
          <el-option label="中等" value="中等" />
          <el-option label="困难" value="困难" />
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
      <el-table-column prop="collectionName" label="合集名称" />
      <el-table-column prop="updateTime" label="更新时间" />
      <el-table-column prop="level" label="等级" />
      <el-table-column prop="operation" label="操作" width="180">
        <el-row>
          <el-button type="primary" :icon="Edit" circle />
          <el-button type="danger" :icon="Delete" circle />
        </el-row>
      </el-table-column>
    </el-table>
    <el-pagination
      class="el-p"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[5, 10, 15, 20]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="jumper, total, sizes, prev, pager, next"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
  <!-- 添加题目抽屉 -->
  <el-drawer
    v-model="addProblemDrawer"
    size="40%"
    :direction="direction"
    :before-close="handleClose"
  >
    <template #header>
      <h3>添加题目</h3>
    </template>
    <template #default>
      <!-- 题目表单 -->
      <el-form
        ref="problemFormRef"
        style="max-width: 800px"
        :model="problemForm"
        :rules="problemRules"
        label-width="auto"
        class="demo-ruleForm"
        size="large"
        status-icon
      >
        <el-form-item label="标题" prop="title">
          <el-input
            v-model="problemForm.title"
            placeholder="请输入题目的标题"
          />
        </el-form-item>
        <el-form-item label="等级" prop="level">
          <el-select v-model="problemForm.level" placeholder="请选择题目的等级">
            <el-option label="简单" value="简单" />
            <el-option label="中等" value="中等" />
            <el-option label="困难" value="困难" />
          </el-select>
        </el-form-item>
        <el-form-item label="合集编号" prop="collectionId">
          <el-input
            v-model="problemForm.collectionId"
            placeholder="请输入题目的合集编号"
          />
        </el-form-item>
        <el-form-item label="描述" prop="description"> </el-form-item>
        <el-form-item label="模板代码" prop="templateCode"> </el-form-item>
        <el-form-item label="测试代码" prop="testCode"> </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button type="primary" @click="addProblem">确认</el-button>
        <el-button type="primary" @click="clearProblemForm">重置</el-button>
        <el-button type="info" @click="addProblemDrawer = false"
          >取消</el-button
        >
        <el-button
          type="info"
          @click="
            console.log();
            ElMessage.info(JSON.stringify(problemForm));
          "
          >显示表单数据</el-button
        >
      </div>
    </template>
  </el-drawer>
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
