<script lang="ts" setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const id = route.params.id;

// 导航栏
const activeIndex = ref("0");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

// 编译器
import MonacoEditor from "@/components/MonacoEditor.vue";
const code = ref("// 在这里编写代码");
const output = ref();
const handleSubmit = () => {};

const submitCode = () => {
  // 这里添加提交代码的逻辑
  alert("代码已提交");
};

const runCode = () => {
  // 这里添加运行代码的逻辑
  // 模拟输出结果
  output.value = "运行结果：\n" + code.value;
};
</script>

<template>
  <div class="common-layout">
    <el-container style="height: 100vh">
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <el-menu-item index="0"> 题目列表 </el-menu-item>
          <div class="flex-grow" />
        </el-menu>
      </el-header>
      <el-main>
        <el-row :gutter="10" style="height: 100%">
          <el-col :span="11" style="height: 100%">
            <el-card shadow="hover" style="height: 100%; overflow: auto">
              <h2>题目信息</h2>
              <p>这是题目描述，可以包括代码示例、输入输出说明等。</p>
            </el-card>
          </el-col>
          <el-col :span="13" style="height: 100%">
            <el-card shadow="hover" style="height: 100%; overflow: auto">
              <el-form @submit.native.prevent="handleSubmit">
                <el-form-item>
                  <el-input
                    type="textarea"
                    v-model="code"
                    rows="15"
                    placeholder="在这里编写代码"
                  ></el-input>
                  <div></div>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="runCode"
                    >运行代码</el-button
                  >
                  <el-button type="success" @click="submitCode"
                    >提交代码</el-button
                  >
                </el-form-item>
              </el-form>
              <h3>输出结果</h3>
              <el-card style="height: 100%; overflow: auto">
                <pre>{{ output }}</pre>
              </el-card>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.el-col {
  border-radius: 4px;
}
h2 {
  margin-top: 0;
}
</style>
