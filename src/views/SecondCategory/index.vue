<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getSecondCategoryData } from "../../../apis/categoryApi";
import { getSecondGoodsData } from "../../../apis/categoryApi";
import GoodItems from "../Home/components/GoodItems.vue";

const route = useRoute();

//二级分类
const secondCaregoryList = ref([]);
const getSecondCategory = async (id = route.params.id) => {
  const res = await getSecondCategoryData(id);
  secondCaregoryList.value = res.result;
};

//二级商品
const secondGoodsList = ref([]);
const data = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: "publishTime",
});
const getSecondGood = async () => {
  const res = await getSecondGoodsData(data.value);
  secondGoodsList.value = res.result.items;
};
onMounted(() => {
  getSecondCategory();
  getSecondGood();
});

//tag改变后重新请求接口
const handleChange = () => {
  data.value.page = 1;
  getSecondGood();
};

const disabled = ref(false); //是否停止加载
//滑动到底部加载更多
const load = async () => {
  data.value.page++;
  //获取新数据，并进行新老数据拼接
  const res = await getSecondGoodsData(data.value);
  secondGoodsList.value = [...secondGoodsList.value, ...res.result.items];
  //判断数据长度决定是否需要继续加载
  if (res.result.items.length === 0) {
    disabled.value = true;
  }
};
</script>
<template>
  <div>
    <div class="el-nav">
      <!-- 面包屑组件 ，显示当前页面的路径，快速返回任意页面 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          ><a :href="`/category/${secondCaregoryList.parentId}`">{{
            secondCaregoryList.parentName
          }}</a></el-breadcrumb-item
        >
        <el-breadcrumb-item
          ><a href="/">{{ secondCaregoryList.name }}</a></el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>

    <div class="second-nav-content">
      <!-- tab标签导航 -->
      <el-tabs
        v-model="data.sortField"
        class="demo-tabs"
        @tab-change="handleChange"
      >
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>

      <!-- 商品列表 -->
      <div
        class="item"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled"
      >
        <good-items
          v-for="goods in secondGoodsList"
          :key="goods"
          :good="goods"
        ></good-items>
      </div>
    </div>
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
.second-nav-content {
  background-color: #fff;
}
.demo-tabs {
  padding: 20px 10px 0px;
}
.item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>