<script setup>
// defineProps--适用于布局一样，数据不同的静态数据
defineProps({
  title: {
    type: String,
  },
  secondTitle: {
    type: String,
  },
  secondTitleTwo: {
    type: String,
  },
});
</script>

<template>
  <div>
    <h3>
      {{ title
      }}<span
        >{{ secondTitle }} <span>{{ secondTitleTwo }}</span></span
      >
    </h3>
    <!--插槽，适用于布局一样，数据不同的动态数据 -->
    <slot />
  </div>
</template>

<style lang="scss" scoped>
div {
  margin: 0 auto;
  width: 1240px;
}
h3 {
  height: 100px;
  line-height: 100px;
  vertical-align: middle;
  font-size: 26px;
}
h3 > span {
  margin-left: 20px;
  font-size: 14px;
  color: #999999;
}
</style>