<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

//提示
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";

import { userUserStore } from "@/stores/userStore";

//获取userUserStore对象
const userStore = userUserStore();

// //准备表单对象
const rulesData = ref({
  account: "heima282",
  password: "hm#qd@23!",
  agree: true,
});
// //准备规则对象
const rules = ref({
  account: [
    {
      required: true,
      message: "账号不可为空",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码不可为空",
      trigger: "blur",
    },
    {
      min: 6,
      max: 14,
      message: "密码长度范围是6-14字符",
      trigger: "blur",
    },
  ],
  agree: [
    {
      //自定义校验逻辑
      validator: (rule, value, callback) => {
        //value 输入的值
        if (value) {
          callback();
        } else {
          callback(new Error("请勾选协议"));
        }
      },
    },
  ],
});

//获取router对象：用于调整，route对象，用于获取参数
const router = useRouter();

//如果一进来就点击登录不会有错误提示问题
//获取form对象
const fromref = ref(null);

const clickLogin = () => {
  fromref.value.validate(async (valid) => {
    //valid：所有表单都通过校验了才会为true
    if (valid) {
      //做登录处理
      //结构赋值获取要传递的参数,必须在登录操作内部获取，不然获取不到最新的数据
      const { account, password } = rulesData.value;
      await userStore.getUserInfo({ account, password });
      //登录成功。跳转到首页
      ElMessage({
        type: "success",
        message: "登录成功",
      });
      router.replace({ path: "/" });
    }
  });
};
</script>
<template>
  <div>
    <div class="top">
      <a href="#"> <img src="../../assets/images/logo.png" /></a>
      <div class="to-home">
        <a href="/">进入首页</a>
        <i class="iconfont icon-angle-right"></i>
        <i class="iconfont icon-angle-right"></i>
      </div>
    </div>
    <div class="login-bg">
      <div class="login-content">
        <h2 class="title">账号登录</h2>

        <el-form
          ref="fromref"
          :model="rulesData"
          :rules="rules"
          class="form"
          status-icon
        >
          <el-form-item label="账号" prop="account">
            <el-input v-model="rulesData.account" :value="rulesData.account" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="rulesData.password"
              :value="rulesData.password"
            />
          </el-form-item>
          <el-form-item prop="agree">
            <el-checkbox v-model="rulesData.agree">
              我已同意隐私条款和服务条款</el-checkbox
            >
          </el-form-item>
          <el-button type="primary" class="login-button" @click="clickLogin"
            >点击登录</el-button
          >
        </el-form>
      </div>
    </div>
    <div class="bot">
      <ul>
        <li><a href="#">关于我们</a>|</li>
        <li><a href="#">帮助中心</a>|</li>
        <li><a href="#">售后服务</a>|</li>
        <li><a href="#">配送与验收</a>|</li>
        <li><a href="#">上午合作</a>|</li>
        <li><a href="#">搜索推荐</a>|</li>
        <li><a href="#">友情链接</a></li>
      </ul>
      <p>CopyRight @ 小兔鲜儿</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top {
  height: 150px;
  background-color: #fff;
  line-height: 150px;
  text-align: center;
}
.top > a {
  margin-left: 100px;
  float: left;
}
.top > a > img {
  width: 200px;
}
.top > .to-home {
  margin-right: 100px;
  float: right;
  font-size: 16px;
}
.top > .to-home > i {
  font-size: 12px;
  color: $xtxColor;
}

.login-bg {
  position: relative;
  height: 488px;
  background-image: url("../../assets/images/login-bg.png");
}
.login-content {
  position: absolute;
  top: 80px;
  right: 200px;
  width: 300px;
  height: 300px;
  background-color: #fff;
}
.login-content > .form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-content > .title {
  font-weight: normal;
  text-align: center;
}
.login-content > hr {
  background-color: #999999;
}
.login-button {
  width: 250px;
}

.bot {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
}
.bot > ul {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.bot > ul > li {
  color: #999999;
  font-size: 12px;
}
.bot > ul > li > a,
.bot > p {
  color: #999999;
  font-size: 12px;
  margin: 0px 10px;
}
.bot > p {
  margin-top: 10px;
}
</style>