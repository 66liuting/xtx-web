<script setup>
import { getBannerData } from "../../../../apis/homeApi";
import { onMounted, ref } from "vue";

const bannerList = ref([]);
const getBanner = async () => {
  const res = await getBannerData(1);
  bannerList.value = res.result;
  console.log(res);
};
onMounted(() => {
  getBanner();
});
</script>

<template>
  <div class="banner">
    <el-carousel height="450px">
      <el-carousel-item v-for="item in bannerList" :key="item">
        <img :src="item.imgUrl" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped>
.banner,
img {
  width: 1240px;
  height: 450px;
}
</style>
