<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getGoodDetailData } from "../../../apis/detail";
import DetailHot from "./components/DetailHot.vue";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
import { useCartStore } from "@/stores/carStore";

const route = useRoute();
const goodDetail = ref({});
const getGoodDetail = async () => {
  const res = await getGoodDetailData(route.params.id);
  goodDetail.value = res.result;
};
onMounted(() => {
  getGoodDetail();
});

//选择的商品规格数据
let skuObject = {};
const skuChange = (sku) => {
  // console.log(sku);
  skuObject = sku;
};

//商品数量
const count = ref(1);
const countChange = (num) => {
  count.value = num;
};

const cartStore = useCartStore();
//添加购物车
const addCart = () => {
  console.log(count.value)
  if (skuObject.skuId) {
    //不为空已选择，添加
    cartStore.addCart({
      id: goodDetail.value.id,
      name: goodDetail.value.name,
      picture: goodDetail.value.mainPictures[0],
      price: goodDetail.value.price,
      count: count.value,
      skuId: skuObject.skuId,
      attrsText: skuObject.specsText,
      selected: true,
    });
  } else {
    //没有选择，提示用户
    ElMessage.warning("请选择规格");
  }
};
</script>

<template>
  <div class="contair" v-if="goodDetail.details">
    <div class="el-nav">
      <!-- 面包屑组件 ，显示当前页面的路径，快速返回任意页面 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          ><a :href="`/category/${goodDetail.categories[1].id}`">{{
            goodDetail.categories[1].name
          }}</a></el-breadcrumb-item
        >
        <el-breadcrumb-item
          ><a :href="`/category/second/${goodDetail.categories[0].id}`">{{
            goodDetail.categories[0].name
          }}</a></el-breadcrumb-item
        >
        <el-breadcrumb-item
          ><a href="#">{{ goodDetail.name }}</a></el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>

    <div class="good-content">
      <div class="left">
        <div class="img-content">
          <!-- 图片展示区域 -->
          <XtxImg :imgs="goodDetail.mainPictures" />
        </div>

        <ul class="good-count-info">
          <li>
            <p class="title">销量人气</p>
            <p class="count">{{ goodDetail.salesCount }}+</p>
            <p class="look">
              <i class="iconfont icon-task-filling"></i> 销量人气
            </p>
          </li>
          <li>
            <p class="title">商品评价</p>
            <p class="count">{{ goodDetail.commentCount }}+</p>
            <p class="look">
              <i class="iconfont icon-comment-filling"></i> 查看评价
            </p>
          </li>
          <li>
            <p class="title">收藏人气</p>
            <p class="count">{{ goodDetail.collectCount }}+</p>
            <p class="look">
              <i class="iconfont icon-favorite-filling"></i> 收藏商品
            </p>
          </li>
          <li>
            <p class="title">品牌信息</p>
            <p class="count">{{ goodDetail.brand.name }}</p>
            <p class="look">
              <i class="iconfont icon-dynamic-filling"></i> 品牌主页
            </p>
          </li>
        </ul>
      </div>
      <div class="right">
        <h3 class="good-name">{{ goodDetail.name }}</h3>
        <p class="desc">{{ goodDetail.desc }}</p>
        <p class="new-price">
          <span>¥</span>{{ goodDetail.price }}
          <del>¥{{ goodDetail.oldPrice }}</del>
        </p>

        <div class="promotional-service">
          <dl>
            <dt>促销</dt>
            <dd>12月好物放送，App领劵购买直降120元</dd>
          </dl>

          <dl>
            <dt>服务</dt>
            <dd>
              <span>无忧退货</span>
              <span>快递退款</span>
              <span>免费包邮</span>
              <a href="#" class="look-good-detail">了解详情</a>
            </dd>
          </dl>
        </div>

        <XtxSku :goods="goodDetail" @change="skuChange" />

        <!-- 商品数量 -->
        <el-input-number v-model="count" @change="countChange(count)" />
        <br />

        <el-button class="add-car" @click="addCart">加入购物车</el-button>
      </div>
    </div>

    <div class="good-detail">
      <div class="detail-left">
        <h4>商品详情</h4>
        <hr style="background-color: #f5f5f5; height: 1px; border: none" />
        <ul>
          <li
            v-for="propertie in goodDetail.details.properties"
            :key="propertie"
          >
            <span> {{ propertie.name }}</span> {{ propertie.value }}
          </li>
        </ul>

        <img
          v-for="picture in goodDetail.details.pictures"
          :key="picture"
          :src="picture"
          alt=""
        />
      </div>
      <div class="detail-right">
        <DetailHot :hotType="1" />
        <DetailHot :hotType="2" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contair {
  margin: 0 auto;
  width: 1240px;
}
.el-nav {
  padding: 20px 0px;
  font-size: 16px;
}
.good-content {
  display: flex;
  padding: 15px 0px;
  background-color: #fff;
}
.left {
  width: 480px;
}
.img-content {
  display: flex;
  margin-bottom: 10px;
}

.good-count-info {
  display: flex;
}
.good-count-info > li {
  padding: 10px;
  border-right: 1px solid #f5f5f5;
  text-align: center;
}
.good-count-info > li:nth-child(4) {
  border-right: 0px;
}
.good-count-info > li > .title {
  font-size: 14px;
  color: #999999;
}
.good-count-info > li > .count {
  margin: 10px 0px;
  font-size: 14px;
  color: $helpColor;
}
.good-count-info > li > .look {
  margin: 10px 0px;
  font-size: 14px;
  color: #666;
}
.good-count-info > li > .look > i {
  color: $xtxColor;
}
.right {
  flex: 1;
  margin-left: 40px;
}
.right > .good-name {
  font-weight: normal;
}
.right > .desc {
  margin: 10px 0px;
  font-size: 12px;
  color: #999999;
}
.right > .new-price {
  font-size: 25px;
  color: $priceColor;
}
.right > .new-price > span {
  font-size: 20px;
}
.right > .new-price > del {
  font-size: 16px;
  color: #999999;
}
.right > .promotional-service {
  direction: flex;
  flex-direction: column;
  padding: 0px 10px;
  margin: 10px 0px;
  width: 600px;
  height: 100px;
  background-color: #f5f5f5;
  border-radius: 5px;
}
.right > .promotional-service > dl {
  display: flex;
  height: 50px;
  line-height: 50px;
  vertical-align: middle;
}
.right > .promotional-service > dl > dt {
  font-size: 14px;
  color: #999999;
  margin-right: 30px;
}
.right > .promotional-service > dl > dd {
  font-size: 14px;
  color: #666666;
}
.right > .promotional-service > dl > dd > span {
  margin-right: 10px;
}
.right > .promotional-service > dl > dd > span::before {
  margin-right: 2px;
  content: "•";
  color: $xtxColor;
}
.look-good-detail {
  color: $xtxColor;
}
.good-detail {
  display: flex;
  margin-top: 20px;
}
.detail-left {
  width: 940px;
  background-color: #fff;
}
.detail-left > ul {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.detail-left > ul > li {
  margin-top: 10px;
  width: 450px;
  color: #666666;
}
.detail-left > ul > li > span {
  width: 120px;
  display: inline-block;
  color: #999999;
}
.detail-left > img {
  width: 900px;
  margin-left: 20px;
}
.detail-left > h4 {
  padding: 15px 20px;
  font-size: 20px;
}

.detail-right {
  margin-left: 20px;
  width: 280px;
}
.add-car {
  margin-top: 20px;
  cursor: pointer;
}
.add-car:hover {
  color: $xtxColor;
}
</style>