<template>
  <img class="poster" src="@/assets/hb.jpg" alt="hb" />
  <div class="poster-label">
    <p>学校概况</p>
    <span
      >武汉工程科技学院（原中国地质大学江城学院）创办于2004年2月，是一所经教育部批准的全日制普通本科高校。2014年5月，教育部批准学校转设并更名为武汉工程科技学院。2014年9月，学校成为湖北省首批应用型人才培养试点高校。</span
    >
  </div>
  <div class="view">
    <Speech />
    <SchoolProfile />
    <Role />
    <SchoolLabel />
  </div>
</template>

<script setup>
import Speech from "../components/Speech.vue";
import SchoolProfile from "../components/SchoolProfile.vue";
import Role from "../components/Role.vue";
import SchoolLabel from "../components/SchoolLabel.vue";
</script>

<style>
.title {
  text-align: center;
  margin: 25px 0px;
}
.container {
  font-size: larger;
}

.content {
  text-indent: 2em;
}
</style>
