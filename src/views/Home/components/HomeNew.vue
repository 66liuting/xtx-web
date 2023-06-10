<script setup>
import HomePlan from "./HomePlan.vue";
import { getNewGoodsData } from "../../../../apis/homeApi.js";
import { onMounted, ref } from "vue";
const newGoodList = ref([]);
const getNewGood = async () => {
  const res = await getNewGoodsData();
  newGoodList.value = res.result;
};
onMounted(() => {
  getNewGood();
});
</script>
<template>
  <div>
    <HomePlan title="新鲜好物" secondTitle="新鲜出炉" secondTitleTwo="品质靠谱">
      <ul>
        <li v-for="item in newGoodList" :key="item">
          <a :href="`/detail/${item.id}`" class="new-item">
            <img :src="item.picture" alt="" />
            <p class="new-name">{{ item.name }}</p>
            <p class="new-price">¥{{ item.price }}</p>
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
  background-color: #f0f9f4;
}

ul > li > a > img {
  width: 306px;
  height: 306px;
}

ul > li > a > .new-name {
  margin-top: 10px;
  width: 306px;
  font-size: 25px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
}
ul > li > a > .new-price {
  margin-top: 10px;
  width: 306px;
  font-size: 30px;
  color: red;
  text-align: center;
}
</style>