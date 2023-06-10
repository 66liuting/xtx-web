<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getHotData } from "../../../../apis/detail";

const props = defineProps({
  hotType: {
    type: Number,
  },
});

const route = useRoute();
const hotList = ref([]);
const getHot = async () => {
  const res = await getHotData({
    id: route.params.id,
    type: props.hotType,
  });

  hotList.value = res.result;
};

onMounted(() => {
  getHot();
});
</script>

<template>
  <div>
    <p class="hot">{{ props.hotType === 1 ? "24小时热榜" : "周热榜" }}</p>
    <ul>
      <li v-for="item in hotList" :key="item">
        <img :src="item.picture" class="hot-pic" />
        <p class="hot-name">{{ item.name }}</p>
        <p class="hot-desc">{{ item.desc }}</p>
        <p class="hot-price">¥{{ item.price }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.hot {
  margin-top: 10px;
  padding-left: 20px;
  height: 80px;
  background-color: $helpColor;
  color: white;
  font-size: 20px;
  line-height: 80px;
  vertical-align: middle;
}
ul {
  padding: 20px;
  width: 100%;
  background-color: #fff;
}
ul > li {
  margin-bottom: 10px;
}
.hot-pic {
  margin-left: 40px;
  width: 160px;
  height: 160px;
}
.hot-name {
  margin-top: 10px;
  font-size: 18px;
  color: #333;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
}
.hot-desc {
  margin-top: 5px;
  font-size: 14px;
  color: #999;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
}
.hot-price {
  margin-top: 5px;
  font-size: 20px;
  color: $priceColor;
  width: 100%;
  text-align: center;
}
</style>