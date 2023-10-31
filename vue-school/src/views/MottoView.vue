<template>
  <img class="poster" src="@/assets/hb2.jpg" alt="hb" />
  <div class="poster-label">
    <p>一训四风</p>
    <span
      >学校校训、校风、教风、学风、作风是一所学校的精神、办学理念和办学特色的标志性体现，是学校历史和优良传统的高度概括，是校园文化建设的重要组成部分。</span
    >
  </div>
  <div class="view">
    <Motto />
    <MottoDesc />
  </div>
</template>

<script setup>
import Motto from "../components/Motto.vue";
import MottoDesc from "../components/MottoDesc.vue";
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
