<!-- 现任领导 -->
<template>
  <h1 class="title">现任领导</h1>
  <div class="container">
    <div class="roles-wrapper">
      <!-- 对象循环 -->
      <div class="role-wrapper" v-for="role in roles" :key="role.id">
        <div class="role">
          <div class="role-img-wrapper">
            <!-- 属性绑定 -->
            <img :src="role.img" />
          </div>
          <div class="role-info">
            <h3>{{ role.name }}</h3>
            <br />
            <p>{{ role.info }}</p>
          </div>
        </div>
      </div>
      <div class="role-more">
        <!-- 条件渲染 -->
        <!-- 事件处理 -->
        <button
          type="button"
          class="showMoreBtn"
          v-if="showMoreBtn"
          @click="more"
        >
          点击获取更多
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 这里应该从数据库中获取数据
      roles: [
        {
          id: 1,
          name: "杨炜苗",
          info: "武汉工程科技学院董事长。主持学校董事会的全面工作。",
          img: "https://www.wuhues.com/wp-content/uploads/sites/12/2021/07/ren.png",
        },
        {
          id: 2,
          name: "王加青",
          info: "武汉工程科技学院副董事长、党委副书记、常务副校长。负责学校日常工作，分管人事处。",
          img: "https://www.wuhues.com/wp-content/uploads/sites/12/2021/07/01-scaled.jpg",
        },
        {
          id: 3,
          name: "刘迎秋",
          info: "武汉工程科技学院校长。负责学校的全面工作。",
          img: "https://www.wuhues.com/wp-content/uploads/sites/12/2019/09/0d3e3517382e249f97ae9e66211546ea-e1628155498702.jpg",
        },
        {
          id: 4,
          name: "高芸",
          info: "武汉工程科技学院党委书记、副校长。全面负责学校党的建设工作和教育督导工作。分管党政办…",
          img: "https://www.wuhues.com/wp-content/uploads/sites/12/2019/04/3f55c63e9dc843cbe8f53baca53977fb-e1628155798699.jpg",
        },
        {
          id: 5,
          name: "杨伦",
          info: "武汉工程科技学院党委常委、副校长。负责学校教学、发展规划和合格评估工作。分管发展规划与评建办…",
          img: "https://www.wuhues.com/wp-content/uploads/sites/12/2021/07/IMG_1842.jpg",
        },
        {
          id: 6,
          name: "廖璐莎",
          info: "武汉工程科技学院党委副书记、副校长、财务总监。分管财务处。联系艺术与传媒学院。",
          img: "https://www.wuhues.com/wp-content/uploads/sites/12/2015/06/ccb6a02cd749f8c98f7e2eaa8e98a60d-e1628156093496.png",
        },
      ],
      showMoreBtn: true,
    };
  },
  methods: {
    more() {
      const moreRole = [
        {
          id: 7,
          name: "唐军国",
          info: "武汉工程科技学院党委副书记、校长助理。分管学工处。联系计算机与人工智能学院。",
          img: "https://www.wuhues.com/wp-content/uploads/sites/12/2021/06/333-scaled.jpg",
        },
        {
          id: 8,
          name: "胡晶晶",
          info: "武汉工程科技学院党委常委、校长助理。协助教学副校长管理教学工作。分管教务处。联系人文…",
          img: "https://www.wuhues.com/wp-content/uploads/sites/12/2019/09/6074c3b200dabc91cd31b3bc8db4871f-e1628155174461.jpg",
        },
        {
          id: 9,
          name: "郭万春",
          info: "武汉工程科技学院党委常委、校长助理。分管后勤保卫处、图文信息中心。联系经济与管理学院。",
          img: "https://www.wuhues.com/wp-content/uploads/sites/12/2020/08/微信图片_20220414102050-scaled.jpg",
        },
        {
          id: 10,
          name: "赵欢",
          info: "武汉工程科技学院党委常委、校长助理。分管招生办公室、国际教育学院。",
          img: "https://www.wuhues.com/wp-content/uploads/sites/12/2022/04/赵欢01-scaled.jpg",
        },
      ];
      // 使用扩展运算符将新数组中的项目添加到 roles 数组
      this.roles.push(...moreRole);
      // 加载更多角色后不让 点击更多 按钮渲染
      this.showMoreBtn = false;
    },
  },
  //   监听器
  watch: {
    showMoreBtn() {
      alert("即将为您显示更多"); // 显示浏览器弹窗
    },
  },
};
</script>

<style scoped>
.roles-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.role-wrapper {
  margin-bottom: 10px;
}

.role {
  width: 694px;
  height: 300px;
  box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
}

.role-img-wrapper {
  width: 218px;
  height: 300px;
  max-width: 100%;
}

.role-img-wrapper img {
  width: 100%;
  height: 100%;
}

.role-info {
  padding: 20px;
  width: 450px;
}

.role-more {
  width: 100%;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.showMoreBtn {
  text-align: center;
  border: 0.5px solid #03706f;
  border-radius: 4px;
  width: 150px;
  height: 40px;
}
</style>
