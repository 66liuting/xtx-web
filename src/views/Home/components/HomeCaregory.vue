<script setup>
import { useCaregoryStore } from "@/stores/caregory.js";
import HomeBanner from "./HomeBanner.vue";
const caregoryStore = useCaregoryStore();

// const activeIndex = ref(0);
// const handleEnter = (index) => {
//   activeIndex.value = index;
// };
</script>
<template>
  <div class="caregory-list">
    <HomeBanner />
    <ul>
      <li v-for="data in caregoryStore.caregoryHeadList" :key="data.id">
        <div class="left">
          <a href="#"
            >{{ data.name }}
            <span v-for="item in data.children.splice(0, 2)" :key="item.id">{{
              item.name
            }}</span>
          </a>
        </div>

        <div class="right">
          <div class="title">
            分类推荐<span>根据您的购买货游览记录推荐</span>
          </div>
          <ul>
            <li v-for="good in data.goods" :key="good.id">
              <img :src="good.picture" alt="" />
              <div>
                <span class="good-name">{{ good.name }}</span>
                <span class="good-des">{{ good.desc }}</span>
                <span class="good-price">¥{{ good.price }}</span>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.caregory-list {
  margin: 0 auto;
  width: 1240px;
  position: relative;
  height: 450px;
}
.caregory-list > ul {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 200px;
  background-color: rgba(0, 0, 0, 0.9);
}
.caregory-list > ul > li {
  width: 100%;
  height: 50px;
  line-height: 40px;
}
.caregory-list > ul > li > .left > a {
  color: white;
  font-size: 16px;
  margin-right: 10px;
  margin-left: 20px;
}
.caregory-list > ul > li > .left:hover {
  background-color: red;
}
.caregory-list > ul > li > .left > a > span {
  font-size: 12px;
}
.right {
  opacity: 0;
  // display: block;
  position: absolute;
  top: 0;
  left: 210px;
  width: 1030px;
  height: 450px;
  background-color: rgba(255, 255, 255, 0.1);
}
.right > .title {
  height: 100px;
  font-size: 20px;
  line-height: 100px;
  color: #333333;
}
.right > .title > span {
  margin-left: 10px;
  font-size: 14px;
  color: #666666;
}
.right > ul {
  display: flex;
  flex-wrap: wrap;
}
.right > ul > li {
  display: flex;
  margin-right: 20px;
  margin-bottom: 10px;
  width: 320px;
  height: 100px;
  border: 1px solid $lineColor;
  border-radius: 5px;
  background-color: #fff;
}
.right > ul > li > img {
  margin-left: 30px;
  margin-top: 10px;
  width: 60px;
  height: 60px;
}
.right > ul > li > div {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: center;
}
.good-name {
  font-size: 16px;
  color: #333333;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 200px;
}
.good-des {
  font-size: 14px;
  color: #999999;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 200px;
}
.good-price {
  font-size: 20px;
  color: red;
}
.show {
  opacity: 1;
}
</style>