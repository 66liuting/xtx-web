<script setup>
import HomePlan from "./HomePlan.vue";
import { getHotGoodData } from "../../../../apis/homeApi";
import { onMounted, ref } from "vue";
const hotGoodList = ref([]);
const getHotGood = async () => {
  const res = await getHotGoodData();
  hotGoodList.value = res.result;
};
onMounted(() => {
  getHotGood();
});
</script>

<template>
  <div>
    <HomePlan title="人气推荐" secondTitle="人气爆款" secondTitleTwo="不同错过">
      <ul>
        <li v-for="item in hotGoodList" :key="item">
          <a href="#">
            <img v-img-lazy="item.picture" alt="" />
            <p class="hot-name">{{ item.title }}</p>
            <p class="hot-decs">{{ item.alt }}</p>
          </a>
        </li>
      </ul>
    </HomePlan>
  </div>
</template>

<style lang="scss" scoped>
div {
  margin: 0 auto;
  width: 1240px;
}

ul {
  display: flex;
}

ul > li {
  margin-right: 10px;
  width: 306px;
  height: 406px;
  background-color: #fff;
}

ul > li > a > img {
  width: 306px;
  height: 306px;
}

ul > li > a > .hot-name {
  margin-top: 10px;
  width: 306px;
  font-size: 25px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
}
ul > li > a > .hot-decs {
  margin-top: 10px;
  width: 306px;
  font-size: 18px;
  color: #999999;
  text-align: center;
}
</style>