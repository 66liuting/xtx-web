<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutFix from "./components/LayoutFix.vue";
import LayoutHead from "./components/LayoutHead.vue";
import LayoutFoot from "./components/LayoutFoot.vue";
import { useCaregoryStore } from "../../stores/caregory.js";
import { onMounted } from "vue";
const caregoryStore = useCaregoryStore();
onMounted(() => {
  caregoryStore.getCaregoryHead();
});
</script>
<template>
<div class="layout">
 <LayoutNav />
  <LayoutHead />
  <LayoutFix />
  <RouterView />
  <LayoutFoot />
</div>
 
</template>

<style lang="scss" scoped>
// .layout{
//   position: relative;
// }
</style>