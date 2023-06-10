<script setup>
import { userUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";
const userStore = userUserStore();
const router = useRouter();

//点击退出登录按钮
const confirmEvent = () => {
  userStore.clearUserinfo();
  //跳转到登录页面
  router.push({ path: "/login" });
};
</script>
<template>
  <div class="nav-content">
    <div class="nav-box" v-if="userStore.userInfo.token">
      <i class="iconfont icon-user"></i>
      <a href="#">{{ userStore.userInfo.account }} <span>|</span></a>

      <el-popconfirm
        width="100"
        confirm-button-text="确认"
        cancel-button-text="取消"
        :icon="InfoFilled"
        icon-color="#626AEF"
        title="确认退出吗?"
        @confirm="confirmEvent"
      >
        <template #reference>
          <a>退出登录 <span>|</span></a>
        </template>
      </el-popconfirm>

      <a href="#">我的订单 <span>|</span></a>
      <a href="#" class="last-li">会员中心</a>
    </div>

    <div class="nav-box" v-else>
      <a href="/login">请先登录 <span>|</span></a>
      <a href="#">帮助中心 <span>|</span></a>
      <a href="#" class="last-li">关于我们 </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-content {
  position: relative;
  width: 100%;
  height: 60px;
  background-color: #333;
}

.nav-box {
  position: absolute;
  top: 0;
  right: 0;
}
.nav-box > a {
  width: 300px;
  line-height: 60px;
  text-align: center;
  color: white;
  cursor: pointer;
}

a:hover {
  color: $xtxColor;
}
.nav-box > a > span {
  margin: 0px 20px;
}
.last-li {
  margin-right: 100px;
}
</style>