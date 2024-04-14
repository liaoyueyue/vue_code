<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    router
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><User /></el-icon>
        <span>个人中心</span>
      </template>
      <el-menu-item-group title="个人信息">
        <el-menu-item index="/user/info">
          <el-icon><User /></el-icon>
          <span>基本资料</span>
        </el-menu-item>
        <el-menu-item index="1-2">
          <el-icon><Edit /></el-icon>
          <span>更改密码</span>
        </el-menu-item>
        <el-menu-item index="1-3">
          <el-icon><Crop /></el-icon>
          <span>更换头像</span>
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="其他信息">
        <el-sub-menu index="1-4">
          <template #title>第三方信息</template>
          <el-menu-item index="1-4-1">其他</el-menu-item>
        </el-sub-menu>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><document /></el-icon>
      <span>题目管理</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><Collection /></el-icon>
      <span>题目合集管理</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>设置</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ArrowDown } from "@element-plus/icons-vue";
</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
