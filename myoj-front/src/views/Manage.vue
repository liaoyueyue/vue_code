<script lang="ts" setup>
import { ref } from "vue";
import {
  Document,
  User,
  Crop,
  Edit,
  Setting,
  Collection,
} from "@element-plus/icons-vue";

import HeaderMenu from "@/components/HeaderMenu.vue";

// 左侧菜单
const isCollapse = ref(false);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

// 导航下拉菜单路由
import { useRouter } from "vue-router";
import { ElMessage, ElMessageBox } from "element-plus";
import { useTokenStore } from "@/stores/token";
import { useUserInfoStore } from "@/stores/userinfo";
const tokenStore = useTokenStore();
const userinfoStore = useUserInfoStore();
const router = useRouter();
const handleDropdown = (command) => {
  if (command === "logout") {
    ElMessageBox.confirm("是否退出登录？需要重新登录！", "警告", {
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      type: "warning",
    })
      .then(async () => {
        // 1. 清空 pinia 中的 token 和 userinfo
        tokenStore.removeToken();
        userinfoStore.removeInfo();
        // 2. 跳转到登录页面
        router.push("/login");
        ElMessage({
          type: "success",
          message: "退出登录成功",
        });
      })
      .catch(() => {
        ElMessage({
          type: "info",
          message: "取消退出登录",
        });
      });
  } else {
    router.push("/user/" + command);
  }
};
</script>

<template>
  <el-container>
    <el-header>
      <HeaderMenu @dropdownHandle="handleDropdown" />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :value="false">扩展</el-radio-button>
          <el-radio-button :value="true">折叠</el-radio-button>
        </el-radio-group>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><User /></el-icon>
              <span>个人中心</span>
            </template>
            <el-menu-item-group title="个人信息">
              <el-menu-item index="1-1" route="/user/info">
                <el-icon><User /></el-icon>
                <span>基本资料</span>
              </el-menu-item>
              <el-menu-item index="1-2" route="/user/updatePwd">
                <el-icon><Edit /></el-icon>
                <span>更改密码</span>
              </el-menu-item>
              <el-menu-item index="1-3" route="/user/avater">
                <el-icon><Crop /></el-icon>
                <span>更换头像</span>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="其他信息">
              <el-sub-menu index="1-4">
                <template #title>第三方信息</template>
                <el-menu-item index="1-4-1" route="/developing"
                  >其他</el-menu-item
                >
              </el-sub-menu>
            </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item index="2" route="/problem/manage">
            <el-icon><document /></el-icon>
            <span>题目管理</span>
          </el-menu-item>
          <el-menu-item index="3" route="/problem/collection">
            <el-icon><Collection /></el-icon>
            <span>题目合集管理</span>
          </el-menu-item>
          <el-menu-item index="4" route="/developing">
            <el-icon><setting /></el-icon>
            <span>设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>myoj @2024 Created by liaoyueyue</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped></style>
