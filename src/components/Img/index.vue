<script setup>
import { ref, watch } from "vue";
import { useMouseInElement } from "@vueuse/core";

const props = defineProps({
  imgs: {
    type: Array,
    default: () => [],
  },
});

//处理鼠标进入事件，记下当前index
const activeIndex = ref(0);
const handleEnter = (index) => {
  activeIndex.value = index;
};

// 2. 获取鼠标相对位置
const target = ref(null);
const { elementX, elementY, isOutside } = useMouseInElement(target);

// 3. 控制滑块跟随鼠标移动（监听elementX/Y变化，一旦变化 重新设置left/top）
const left = ref(0);
const top = ref(0);

const positionX = ref(0);
const positionY = ref(0);
watch([elementX, elementY, isOutside], () => {
  // 如果鼠标没有移入到盒子里面 直接不执行后面的逻辑
  if (isOutside.value) return;

  // 有效范围内控制滑块距离
  // 横向
  if (elementX.value > 100 && elementX.value < 300) {
    left.value = elementX.value - 100;
  }
  // 纵向
  if (elementY.value > 100 && elementY.value < 300) {
    top.value = elementY.value - 100;
  }

  // 处理边界
  if (elementX.value > 300) {
    left.value = 200;
  }
  if (elementX.value < 100) {
    left.value = 0;
  }

  if (elementY.value > 300) {
    top.value = 200;
  }
  if (elementY.value < 100) {
    top.value = 0;
  }

  // 控制大图的显示
  positionX.value = -left.value * 2;
  positionY.value = -top.value * 2;
});
</script>
<template>
  <div class="big-img" v-if="props.imgs.length" ref="target">
    <img :src="props.imgs[activeIndex]" alt="" />

    <div
      class="layer"
      :style="{ left: `${left}px`, top: `${top}px` }"
      v-if="!isOutside"
    ></div>

    <div
      class="big-layer"
      :style="[
        {
          backgroundImage: `url(${props.imgs[activeIndex]})`,
          backgroundPositionX: `${positionX}px`,
          backgroundPositionY: `${positionY}px`,
        },
      ]"
      v-if="!isOutside"
    ></div>
  </div>

  <div class="small-img">
    <ul>
      <li
        v-for="(item, index) in props.imgs"
        :key="index"
        @mouseenter="handleEnter(index)"
        :class="activeIndex === index ? 'active' : ''"
      >
        <img :src="item" alt="" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.big-img {
  position: relative;
  margin-right: 10px;
  width: 400px;
  height: 400px;
}
.big-img > .layer {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 200px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.3);
}
.small-img {
  height: 400px;
}
.small-img > ul {
  display: flex;
  flex-direction: column;
  align-content: space-between;
}
.small-img > ul > li > img {
  margin-bottom: 20px;
  width: 64px;
  height: 64px;
}
// .small-img > ul > li > img:hover,
.active {
  border: 2px solid $xtxColor;
}
.big-layer {
  position: absolute;
  top: 0px;
  left: 410px;
  width: 400px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>