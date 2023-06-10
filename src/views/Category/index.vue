<script setup>
import { onMounted, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { getCategoryDetailData } from "../../../apis/categoryApi";
import { getBannerData } from "../../../apis/homeApi";
import GoodItems from "../Home/components/GoodItems.vue";
//路由获取参数
const route = useRoute();
const caregoryDetail = ref({});
const bannerList = ref([]);
//给id设置一个默认值，有传递的取传过来的，没有取默认值
const getCaregoryDetail = async (id = route.params.id) => {
  const res = await getCategoryDetailData(id);
  caregoryDetail.value = res.result;
};
const getBanner = async () => {
  const res = await getBannerData(2);
  bannerList.value = res.result;
};

//路由参数变化的时候，可以重新请求接口
onBeforeRouteUpdate((to) => {
  getCaregoryDetail(to.params.id);
});

onMounted(() => {
  getCaregoryDetail();
  getBanner();
});
</script>
<template>
  <div>
    <div class="el-nav">
      <!-- 面包屑组件 ，显示当前页面的路径，快速返回任意页面 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          ><a href="/">{{ caregoryDetail.name }}</a></el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="banner">
      <!-- 轮播图 -->
      <el-carousel height="450px">
        <el-carousel-item v-for="item in bannerList" :key="item">
          <img :src="item.imgUrl" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="all-class">
      <h2>全部分类</h2>
      <ul>
        <li v-for="classData in caregoryDetail.children" :key="classData">
          <!-- <router-link class="class-item"> -->
          <a :href="`/category/second/${classData.id}`" class="class-item">
            <img v-img-lazy="classData.picture" />
            <p>{{ classData.name }}</p>
          </a>
          <!-- </router-link> -->
        </li>
      </ul>
    </div>

    <ul class="class-item">
      <li v-for="title in caregoryDetail.children" :key="title">
        <h2>-{{ title.name }}-</h2>
        <ul class="class-item-content">
          <li v-for="good in title.goods" :key="good">
            <good-items :good="good"></good-items>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
div {
  margin: 0 auto;
  width: 1240px;
}
.el-nav {
  padding: 20px 0px;
  font-size: 16px;
}
.banner,
img {
  width: 1240px;
  height: 450px;
}
.all-class {
  margin-top: 15px;
  padding: 10px;
  background-color: #fff;
}
.all-class > h2,
.class-item > li > h2 {
  text-align: center;
}
.class-item:hover > p {
  color: $xtxColor;
}

.all-class > ul {
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: space-around;
}

.class-item > img {
  width: 100px;
  height: 100px;
}
.class-item > p {
  margin-top: 10px;
  width: 100px;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
}
.class-item > li {
  margin-top: 15px;
  padding: 10px;
  background-color: #fff;
}

.class-item-content {
  display: flex;
  justify-content: space-around;
}
</style>