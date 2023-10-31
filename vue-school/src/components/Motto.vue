<template>
  <div class="container">
    <h1 class="title">一训四风</h1>
    <div class="lessons">
      <div class="lesson-wrapper" v-for="lesson in lessons">
        <div class="lesson">
          <h2>{{ lesson.main }}</h2>
          <p>{{ lesson.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lessons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.lessons h2 {
  text-align: center;
  margin-bottom: 10px;
}

.lessons p {
  font-weight: 700;
}
</style>

<script>
export default {
  data() {
    return {
      lessons: [
        {
          main: "校训",
          content: "立德  博学  笃行  创新",
        },
        {
          main: "校风",
          content: "团结  勤奋  求实  卓越",
        },
        {
          main: "教风",
          content: "爱生  乐教  严谨  求真",
        },
        {
          main: "学风",
          content: "尊师  勤学  立志  有为",
        },
        {
          main: "作风",
          content: "诚信  守纪  实干  奉献",
        },
      ],
    };
  },
};
</script>
