<template>
  <img class="poster" src="@/assets/hb3.jpg" alt="hb" />
  <div class="poster-label">
    <p>校园风光</p>
    <span>成功人士,巅峰住宅🏠风情庭院,坐拥陵水美景，尽享贵族至尊!</span>
  </div>
  <div class="view">
    <SliderImage />
  </div>
</template>

<script setup>
import SliderImage from "../components/SliderImage.vue";
</script>

<style>
.title {
  text-align: center;
  margin: 25px 0px;
}
</style>
