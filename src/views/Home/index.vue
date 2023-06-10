<script setup>
import HomeCaregory from "./components/HomeCaregory.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeGood from "./components/HomeGood.vue";
</script>

<template>
  <div class="home-box">
    <HomeCaregory />

    <div class="white-content">
      <HomeNew />
      <HomeHot />
    </div>
    <div class="good-content">
      <HomeGood />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-box {
  width: 100%;
}
.white-content {
  background-color: #fff;
}
.good-content {
  margin-top: 10px;
  background-color: #fff;
}
</style>