<template>
  <header>
    <div class="nav-wrapper">
      <a href="/"><img class="logo" src="@/assets/school_logo_l.png" /></a>
      <nav>
        <!-- 使用router-link跳转到对应的页面 -->
        <RouterLink to="/">学校概况</RouterLink>
        <RouterLink to="/motto">一训四风</RouterLink>
        <RouterLink to="/scenery">校园风光</RouterLink>
        <a class="space"></a>
      </nav>
    </div>
  </header>
  <!-- 将跳转后的页面呈现在网页中，实现单页面跳转 -->
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "SourceSansPro-Regular", "微软雅黑";
}

img {
  /* vertical-align: middle; */
  max-width: 100%;
  border: 0;
}

.poster {
  position: relative;
  left: 50%;
  height: auto;
  min-height: auto !important;
  min-width: 100%;
  transform: translate(-50%, 0);
  z-index: -2;
}

.poster-label {
  height: 0px;
  position: relative;
  top: -200px;
  left: 250px;
  color: white;
  max-width: 500px;
}

.poster-label p {
  font-size: 48px;
  margin: 0 0 12px;
}

.view {
  /* width: 1000px; */
  width: calc(100% - 500px);
  margin: 0 auto;
}
</style>

<style scoped>
.nav-wrapper::before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: -0.05rem;
  right: 0;
  height: 96px;
  background: url(@/assets/head-bg.png) center repeat-x;
  background-size: auto 99%;
  z-index: -1;
}

.logo {
  display: block;
  position: absolute;
  height: 50px;
  left: 30px;
  top: 20px;
}

.nav-wrapper {
  position: fixed;
  width: 100%;
}

.nav-wrapper nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
}
.nav-wrapper nav a {
  padding: 0 15px;
  line-height: 50px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.7s ease;
}

.nav-wrapper a:hover {
  color: #e2ca5b;
}
</style>
