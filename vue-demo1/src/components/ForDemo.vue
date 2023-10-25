<template>
  <h3>key 属性添加到 v-for</h3>
  <div v-for="(item, index) in fruit" :key="index">{{ item.id }}: {{ item }}</div>
</template>

<script>
export default {
  data() {
    return {
      fruit: ["西瓜", "香蕉", "苹果"],
    };
  },
};
</script>
