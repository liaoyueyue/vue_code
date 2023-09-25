<template>
  <h3>属性绑定</h3>
  <div v-bind:id="mydiv" :class="dynamicClass" v-bind:title="mytitle">
    测试vue的属性绑定
    <button type="button" :disabled="isButtonDisabled">按钮</button>
    <div v-bind="objectOfAttribute">测试v-bind的使用</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mydiv: "mydiv",
      dynamicClass: "myclass",
      mytitle: undefined,
      isButtonDisabled: true,
      objectOfAttribute: {
        id: "mydiv",
        class: "myclass",
      },
    };
  },
};
</script>

<style>
.myclass {
  font-size: large;
  color: red;
  text-align: center;
  margin: 5vh auto;
}
</style>
