<template>
  <h3>模板语法</h3>
  <p>{{ msg }}</p>
  <p>{{ number + 1 }}</p>
  <p>{{ ok ? "yes" : "no" }}</p>
  <p>{{ message.split(" ").reverse().join("-") }}</p>
  <p>{{ rawHTML }}</p>
  <!-- raw 原始的；生的；未经处理的； -->
  <p v-html="rawHTML"></p>
</template>

<script>
export default {
  data() {
    return {
      msg:"神奇的语法",
      number: 519,
      ok:true,
      message:"大 家 好",
      rawHTML:"<a href='https://www.baidu.com'>百度</a>",
    };
  },
};
</script>