<template>
  <h3>列表渲染</h3>
  <ul :class="dynamicClass">
    <li v-for="item in items">{{ item }}</li>
  </ul>
  <div :class="dynamicDiv">
    <div v-for="item in result" style="width: 120px">
      <p>{{ item.title }}</p>
      <img :src="item.avator" :class="dynamicImg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["程序员", "上大学", "IT"],
      dynamicClass: "my-ul",
      result: [
        {
          title: "长沙",
          avator:
            "https://tse3-mm.cn.bing.net/th/id/OIP-C.he-dRFRFbOfBTVGyU9g75QHaE7?w=193&h=129&c=7&r=0&o=5&dpr=2&pid=1.7",
        },
        {
          title: "武汉",
          avator:
            "https://tse1-mm.cn.bing.net/th/id/OIP-C.sWM-m-YnRnUiTDiuFfcL2gHaFL?w=193&h=135&c=7&r=0&o=5&dpr=2&pid=1.7",
        },
        {
          title: "杭州",
          avator:
            "https://tse1-mm.cn.bing.net/th/id/OIP-C.pAC0kxGQkthJxnS9XwH85QHaFj?w=193&h=145&c=7&r=0&o=5&dpr=2&pid=1.7",
        },
      ],
      dynamicImg: "my-img",
      dynamicDiv: "my-div",
    };
  },
};
</script>

<style>
.my-ul {
  color: red;
  font-family: "楷体";
  font-size: 1.5rem;
}

.my-img {
  width: 100px;
}

.my-div {
  display: flex;
  justify-content: flex-start;
}
</style>
