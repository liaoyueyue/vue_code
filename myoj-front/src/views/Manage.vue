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

const isCollapse = ref(false);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<template>
  <el-container>
    <el-header>
      <HeaderMenu />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :value="false">扩展</el-radio-button>
          <el-radio-button :value="true">折叠</el-radio-button>
        </el-radio-group>
        <el-menu
          default-active="3"
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
                <el-menu-item index="1-4-1" route="/developing">其他</el-menu-item>
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
