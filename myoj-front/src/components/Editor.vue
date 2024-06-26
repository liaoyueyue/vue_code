<script setup lang="ts">
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import { onBeforeUnmount, shallowRef } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import request from "@/utils/request.js";
import { ElMessage } from "element-plus";
import type { IEditorConfig, IToolbarConfig } from "@wangeditor/core";
const props = defineProps({
  // 内容 HTML
  textHtml: {
    type: String,
    default: "",
  },
  // 内容 文本
  text: {
    type: String,
    default: "",
  },
});
const emits = defineEmits(["getHtmlVal", "getTextVal"]);

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
// 工具栏配置
const toolbarConfig: Partial<IToolbarConfig> = {
  // 用于去掉不需要的工具栏配置
  excludeKeys: [
    "insertVideo", // 去掉插入视频功能
    "fullScreen", // 去掉全屏功能
  ],
};
// 编辑器配置
const editorConfig: Partial<IEditorConfig> = {
  // 最长输入20000字
  maxLength: 20000,
  // 进入页面不自动聚焦
  autoFocus: true,
  MENU_CONF: {},
};
// 上传图片
editorConfig.MENU_CONF["uploadImage"] = {
  async customUpload(file: any, insertFn: any) {
    upLoadImgVideo("1", file, insertFn);
  },
};

// 上传视频
editorConfig.MENU_CONF["uploadVideo"] = {
  async customUpload(file: any, insertFn: any) {
    upLoadImgVideo("2", file, insertFn);
  },
};

// 封装 - 上传图片、视频
const upLoadImgVideo = (type: string, file: any, insertFn: any) => {
  if (file.size / 1024 / 1024 > 50) {
    ElMessage.error(`文件大小不能超过50MB!`);
    return false;
  } else {
    // 这里根据自己的需求进行处理 --- S
    let formData = new FormData();
    formData.append("file", file);
    formData.append("fileType", type);
    const url: string = "/activity/resource/uploadFile";
    //  这里根据自己的需求进行处理 --- E
    request
      .post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res: any) => {
        console.log(res);
        if (res.code == 0) {
          // 上传成功后拿到的路径插入到富文本编辑器中
          insertFn(res.data.ossFile);
        } else {
          ElMessage.warning(`上传失败`);
        }
      })
      .catch(() => {
        ElMessage.warning(`上传失败`);
      });
  }
};

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
  // 查看所有工具栏key
  // console.log(editor.getAllMenuKeys());
};

// 获得输入的内容
const handleChange = (editor: any) => {
  emits("getHtmlVal", editor.getHtml());
  emits("getTextVal", editor.getText());
};
</script>

<template>
  <div style="border: 1px solid #ccc; max-width: 800px">
    <!-- 工具栏 -->
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="'default'"
    />
    <!-- 内容部分 -->
    <Editor
      style="height: 400px; overflow-y: hidden"
      v-model="props.textHtml"
      :defaultConfig="editorConfig"
      :mode="'default'"
      @onCreated="handleCreated"
      @onChange="handleChange"
    />
  </div>
</template>

<style lang="scss" scoped>
:deep() .w-e-textarea-video-container {
  video,
  img {
    max-width: 787px;
  }
}
</style>
