<script setup>
defineProps({
  good: {
    type: Object,
    default: () => {},
  },
});
</script>
<template>
  <a href="#">
    <img v-img-lazy="good.picture" class="good-img" />
    <p class="good-name">{{ good.name }}</p>
    <p class="good-desc">{{ good.desc }}</p>
    <p class="good-price">¥{{ good.price }}</p>
  </a>
</template>

<style lang="scss" scoped>
.good-img {
  margin: 20px 40px;
  width: 160px;
  height: 160px;
}
.good-name {
  margin: 0 40px;
  width: 160px;
  font-size: 18px;
  color: #333333;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
}
.good-desc {
  margin: 10px 40px;
  width: 160px;
  font-size: 14px;
  color: #999999;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
}
.good-price {
  margin: 0 40px;
  width: 160px;
  font-size: 18px;
  color: red;
  text-align: center;
}
</style>