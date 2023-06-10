<script setup>
import { useCaregoryStore } from "../../../stores/caregory.js";
const caregoryStore = useCaregoryStore();
</script>

<template>
  <div class="left">
    <a href="#"> <img src="../../../assets/images/logo.png" /></a>

    <div class="home">
      <router-link to="/">首页</router-link>
    </div>

    <ul>
      <li v-for="data in caregoryStore.caregoryHeadList" :key="data">
        <router-link
          active-class="active"
          :to="`/category/${data.id}`"
          class="link"
          >{{ data.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.left {
  flex: 1;
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
}
.left > a {
  width: 200px;
}
.home {
  margin-left: 60px;
  font-size: 16px;
  font-weight: 700;
}

.left > ul > li {
  margin-left: 40px;
  float: left;
  font-size: 16px;
  font-weight: 700;
}

.left > ul > li:hover > .link,
.active {
  color: $xtxColor;
  border-bottom: 1px solid $xtxColor;
}
</style>