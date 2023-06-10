<script setup>
import HomePlan from "./HomePlan.vue";
import { getGoodData } from "../../../../apis/homeApi";
import { onMounted, ref } from "vue";
import GoodItems from "./GoodItems.vue";
const goodList = ref([]);
const getGood = async () => {
  const res = await getGoodData();
  goodList.value = res.result;
};
onMounted(() => {
  getGood();
});
</script>
<template>
  <div>
    <HomePlan v-for="item in goodList" :key="item" :title="item.name">
      <div class="good">
        <img v-img-lazy="item.picture" />
        <div class="item">
          <good-items
            v-for="goods in item.goods"
            :key="goods"
            :good="goods"
          ></good-items>
        </div>
      </div>
    </HomePlan>
  </div>
</template>

<style lang="scss" scoped>
div {
  margin: 0 auto;
  width: 1240px;
}
.good {
  display: flex;
}
.good > img {
  width: 240px;
  height: 610px;
}
.good > .item {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>