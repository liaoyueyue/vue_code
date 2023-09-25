<template>
  <h3>条件渲染</h3>
  <div v-if="flag">你能看见我吗</div>
  <div v-else>那你还是看看我吧</div>
  <!-- --- -->
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>
  <!-- --- -->
  <div v-show="flag">你能看见我么</div>
  <!-- 
  v-if是真实的“按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建
  v-if是惰性的： 如果在初次渲染时条件值为false,则不会做任何事。条件区块只有当条件首次变为true时才会被渲染
  v-show 元素无论初始条件如何，始终会被渲染，只有CSS属性会被替换
  总的来说，v-if有更高的切换开销，而v-show有更高的初始渲染开销。如果需要频繁切换则使用show较好；如果在运行时绑定条件很少改变，则v-if会更合适 
  -->
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      type: "C",
    };
  },
};
</script>
