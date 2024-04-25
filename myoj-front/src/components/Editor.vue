<script setup>
// # wangEditor 富文本编辑器
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { ref, shallowRef, onMounted, onBeforeUnmount } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
const editorMode = "simple";

// 内容 HTML
const valueHtml = ref("<p>hello</p>");

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = "<p>模拟 Ajax 异步设置内容</p>";
  }, 1500);
});

const toolbarConfig = {
  toolbarKeys: [
    // 菜单 key
    // 'headerSelect',
    // 'bold', // 加粗
    // 'italic', // 斜体
    // 'through', // 删除线
    // 'underline', // 下划线
    // 'bulletedList', // 无序列表
    // 'numberedList', // 有序列表
    // 'color', // 文字颜色
    // 'insertLink', // 插入链接
    // 'fontSize', // 字体大小
    // 'lineHeight', // 行高
    // 'uploadImage', // 上传图片
    "code", // 插入代码
    // 'delIndent', // 缩进
    // 'indent', // 增进
    // 'deleteImage',//删除图片
    // 'divider', // 分割线
    // 'insertTable', // 插入表格
    // 'justifyCenter', // 居中对齐
    // 'justifyJustify', // 两端对齐
    // 'justifyLeft', // 左对齐
    // 'justifyRight', // 右对齐
    "undo", // 撤销
    "redo", // 重做
    "clearStyle", // 清除格式
    "fullScreen", // 全屏
  ],
};
const editorConfig = { placeholder: "请输入内容..." };

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
</script>

<template>
  <div class="editor">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="editorMode"
    />
    <Editor
      style="height: 300px; overflow-y: hidden"
      v-model="problemForm.description"
      :defaultConfig="editorConfig"
      :mode="editorMode"
      @onCreated="handleCreated"
      @onChange="handleChange"
    />
  </div>
</template>

<style scoped>
.editor {
  width: 100%;
  :deep(.ql-editor) {
    min-height: 200px;
  }
}
</style>
