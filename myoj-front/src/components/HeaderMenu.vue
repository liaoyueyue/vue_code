<script lang="ts" setup>
import { ref } from "vue";
import {
  User,
  Crop,
  ArrowDown,
  SwitchButton,
  Edit,
} from "@element-plus/icons-vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <img
        style="width: 100px"
        src="https://element-plus.org/images/element-plus-logo.svg"
        alt="Element logo"
      />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar> user </el-avatar>
          <el-icon class="el-icon--right">
            <ArrowDown />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="profile" :icon="User"
              >基本资料</el-dropdown-item
            >
            <el-dropdown-item command="password" :icon="Edit"
              >更改密码</el-dropdown-item
            >
            <el-dropdown-item command="avatar" :icon="Crop"
              >更换头像</el-dropdown-item
            >
            <el-dropdown-item command="logout" :icon="SwitchButton"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
:deep(.el-tooltip__trigger:focus-visible) {
      outline: unset;
    }
</style>
