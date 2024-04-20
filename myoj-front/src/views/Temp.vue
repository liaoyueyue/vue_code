<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { User, Lock, Unlock, Right, Message } from "@element-plus/icons-vue";

const formSize = ref("large");
// 登录表单数据和验证规则
interface LoginForm {
  account: string;
  password: string;
}

const loginFormRef = ref<FormInstance>();
const loginForm = reactive<LoginForm>({
  account: "",
  password: "",
});

const loginRules = reactive<FormRules<LoginForm>>({
  account: [
    { required: true, message: "请输入邮箱或者用户名", trigger: "blur" },
    {
      min: 2,
      max: 25,
      message: "邮箱或者用户名长度不符合规则",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 16, message: "密码长度不符合规则", trigger: "blur" },
  ],
});

// 登录函数
const login = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      // 登录请求
    }
  });
};
</script>
<template>
  <el-card>
    <!-- 登录表单 -->
    <h2>登录</h2>
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      :size="formSize"
      hide-required-asterisk="false"
      style="width: 360px"
    >
      <el-form-item prop="account">
        <el-input
          v-model="loginForm.account"
          placeholder="请输入邮箱或者用户名"
          :prefix-icon="User"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          placeholder="请输入密码"
          show-password
          :prefix-icon="Lock"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="login(loginFormRef)"
          style="width: 100%"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>
<style scoped>
.captcha-image {
  cursor: pointer;
  margin-left: 10px;
  vertical-align: middle;
}
</style>
