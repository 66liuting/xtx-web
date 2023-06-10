<script setup>
import LayoutHeadUi from "./LayoutHeadUi.vue";
import LayoutHeadCart from './LayoutHeadCart.vue'
</script>
<template>
  <div class="head-box">
    <div class="content">
      <LayoutHeadUi />
      <div class="right">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜" />
      </div>
      <!-- 购物车 -->
        <LayoutHeadCart/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.head-box {
  width: 100%;
  height: 120px;
  background-color: #fff;
  position: relative;
}
.head-box > .content {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0 auto;
  width: 1240px;
  height: 100%;
}

.head-box > .content > .right {
  float: right;
  border-bottom: 1px solid $lineColor;
}
.head-box > .content > .right > i {
  margin-right: 10px;
}
.head-box > .content > .right > input {
  padding-bottom: 10px;
  width: 150px;
}
.head-box > .content > .right > input :placeholder {
  color: $lineColor;
}
</style>