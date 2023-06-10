<template>
  <div class="order-content">
    <p class="text-address">收货地址</p>
    <div class="address">
      <div class="left">
        <p>收货人：<span>张三</span></p>
        <p>联系方式：<span>11123451</span></p>
        <p>收货地址：<span>湖北省武汉市</span></p>
      </div>

      <div class="right">
        <el-button class="add-car">切换地址</el-button>
        <el-button class="add-car">添加地址</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order-content {
  padding: 20px;
  margin: 10px auto;
  width: 1240px;
  background-color: #fff;
  .text-address {
    height: 50px;
    font-size: 18px;
    border-bottom: 1px solid #f5f5f5;
  }
  .address {
    display: flex;
    align-items: center;
    padding: 20px;
    border: 1px solid #f5f5f5;
    .left {
      flex: 1;
      p {
        margin-top: 10px;
        color: #999;
        font-size: 14px;

        span {
          color: #333;
        }
        //给p元素添加hover
        &:hover{
        color: red;
      }
      }
      
    }
    .right {
    }
  }
}
</style>