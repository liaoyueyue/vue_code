<template>
  <div ref="editorContainer" style="height: 400px"></div>
</template>

<script setup>
import * as monaco from "monaco-editor";
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  modelValue: String,
  language: {
    type: String,
    default: "java",
  },
});

const emit = defineEmits(["update:modelValue"]);

const editorContainer = ref(null);
const editor = ref(null);

onMounted(() => {
  editor.value = monaco.editor.create(editorContainer.value, {
    value: props.modelValue || "",
    language: props.language,
    minimap: {
      enabled: true,
    },
    colorDecorators: true,
    readOnly: false,
    theme: "vs-dark",
  });

  // 监听编辑器内容变化
  editor.value.onDidChangeModelContent(() => {
    emit("update:modelValue", editor.value.getValue());
  });
});

// 监听 modelValue 的变化，并更新编辑器内容
watch(
  () => props.modelValue,
  (newValue) => {
    if (editor.value && editor.value.getValue() !== newValue) {
      editor.value.setValue(newValue);
    }
  }
);
</script>

<style>
/* 确保编辑器占满父容器 */
div[ref="editorContainer"] {
  height: 100%;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
