<script setup lang="ts">
import { ref } from "vue";
import {
  User,
  Crop,
  ArrowDown,
  SwitchButton,
  Edit,
} from "@element-plus/icons-vue";

import avatar from "@/assets/images/default_avatar.jpg";

const emits = defineEmits(["dropdownHandle"]);

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

// 调用函数，获取用户详细信息
import { userInfoService } from "@/api/user";
import { useUserInfoStore } from "@/stores/userinfo";

const userInfoStore = useUserInfoStore();

const getUserInfo = async () => {
  let result = await userInfoService();
  userInfoStore.setInfo(result.data);
};
getUserInfo();

// 下拉菜单事件
const dropdownHandleCommand = (command) => {
  emits("dropdownHandle", command);
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
      <img style="width: 100px" src="@/assets/images/logo.svg" alt="logo" />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">
      <el-dropdown @command="dropdownHandleCommand">
        <span class="el-dropdown-link">
          <el-avatar
            :src="
              userInfoStore.info.userPic ? userInfoStore.info.userPic : avatar
            "
          />
          <el-icon class="el-icon--right">
            <ArrowDown />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="info" :icon="User"
              >基本资料</el-dropdown-item
            >
            <el-dropdown-item command="updatePwd" :icon="Edit"
              >更改密码</el-dropdown-item
            >
            <el-dropdown-item command="avater" :icon="Crop"
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
