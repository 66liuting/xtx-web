<script setup>
import LayoutHeadUi from "./LayoutHeadUi.vue";
import { useScroll } from "@vueuse/core";
const { y } = useScroll(window);
</script>
<template>
  <div class="fix-box" :class="{ show: y > 78 }">
    <div class="content">
      <LayoutHeadUi />
      <div class="right">
        <span>|</span>
        <span>品牌</span>
        <span>专题</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fix-box {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 120px;
  background-color: #fff;
  display: none;
}
.show {
  display: block;
}
.fix-box > .content {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0 auto;
  width: 1240px;
  height: 100%;
}
.fix-box > .content > .right {
  float: right;
}
.fix-box > .content > .right > span {
  font-size: 16px;
  font-weight: 700;
  margin-left: 20px;
}
</style>