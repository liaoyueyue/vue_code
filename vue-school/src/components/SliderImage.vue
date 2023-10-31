<template>
  <h1 class="title">校园美景轮播图</h1>
  <div class="slider-container">
    <!-- 轮播图容器 -->
    <!-- 属性绑定：使用 :style 指令，将 currentIndex 变量与 transform CSS属性绑定，从而实现轮播图的滑动效果。这展示了Vue的属性绑定功能，用于将数据动态应用到DOM元素。 -->
    <div
      class="slider"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
    <!-- 轮播图滑动容器 -->
      <div class="slide" v-for="(item, index) in items" :key="index">
        <img :src="item.imageUrl" alt="Slide" class="image" />
      </div>
    </div>
    <button class="prev-button" @click="prevSlide">
      <!-- 向前切换按钮 -->
      <i class="fas fa-chevron-left">&lt;-</i>
    </button>
    <button class="next-button" @click="nextSlide">
      <!-- 向后切换按钮 -->
      <i class="fas fa-chevron-right">-&gt;</i>
    </button>
    <div class="pagination">
      <!-- 分页指示器容器 -->
      <span
        v-for="(item, index) in items"
        :key="index"
        @click="goToSlide(index)"
        :class="{ active: index === currentIndex }"
      > 
      <!-- 单个分页项 -->
        {{ index + 1 }}
        <!-- 显示页码，通过CSS类 'active' 高亮当前页 -->
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,// 切换到上一个轮播项
      items: [
        // 轮播项数组，包含多个图片对象
        { imageUrl: "@/../static/picture (1).jpg" },
        { imageUrl: "@/../static/picture (2).jpg" },
        { imageUrl: "@/../static/picture (3).jpg" },
        { imageUrl: "@/../static/picture (4).jpg" },
        { imageUrl: "@/../static/picture (5).jpg" },
        { imageUrl: "@/../static/picture (6).jpg" },
        { imageUrl: "@/../static/picture (7).jpg" },
        { imageUrl: "@/../static/picture (8).jpg" },
        { imageUrl: "@/../static/picture (9).jpg" },
      ],
      autoPlayInterval: null, // 切换到上一个轮播项
      autoPlayDelay: 3000, // 自动轮播的间隔时间（毫秒）
    };
  },
  methods: {
    prevSlide() {
      // 切换到上一个轮播项
      this.currentIndex =
        (this.currentIndex - 1 + this.items.length) % this.items.length;
    },
    nextSlide() {
      // 切换到下一个轮播项
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    goToSlide(index) {
      // 切换到指定索引的轮播项
      this.currentIndex = index;
    },
    startAutoPlay() {
      // 定时器
      // 启动自动轮播
      this.autoPlayInterval = setInterval(this.nextSlide, this.autoPlayDelay);
    },
    stopAutoPlay() {
      // 停止自动轮播
      clearInterval(this.autoPlayInterval);
    },
  },
  // 生命周期钩子
  created() {
    this.startAutoPlay(); // 在组件创建时启动自动轮播
  },
};
</script>

<style scoped>
/* 添加图片的最大宽度和最大高度样式 */
.image {
  max-height: 800px; /* 限制最大高度为300像素 */
}

.slider-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  flex: 0 0 100%;
  overflow: hidden;
}

img {
  max-width: 100%;
  height: auto;
  object-fit: cover; /* 图片等比缩放并覆盖整个区域 */
  width: 100%;
  height: 100%;
}

.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
}

.prev-button {
  left: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.next-button {
  right: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination span {
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
}

.pagination span.active {
  background: #007bff;
  color: #fff;
  border-radius: 5px;
}
</style>
