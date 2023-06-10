
<script setup>
import { useCartStore } from "@/stores/carStore";
const cartStore = useCartStore();
</script>
<template>
  <div class="cart-content">
    <a href="#" class="cart">
      <i class="iconfont icon-cart"></i>
      <span>{{ cartStore.cartList.length }}</span>
    </a>

    <div class="cart-layer">
      <ul>
        <li v-for="item in cartStore.cartList" :key="item">
          <img :src="item.picture" alt="" />
          <div class="name-desc">
            <p>{{ item.name }}</p>
            <p class="desc">{{ item.attrsText }}</p>
          </div>
          <div class="price-count">
            <p>¥{{ item.price }}</p>
            <span>X{{ item.count }}</span>
          </div>
          <i
            class="iconfont icon-close-new"
            @click="cartStore.delCart(item.skuId)"
          ></i>
        </li>
      </ul>
      <div class="total">
        <div class="total-price">
          <p>共{{ cartStore.allCount }}件商品</p>
          <span>¥{{ cartStore.allPrice }}</span>
        </div>
        <el-button
          type="primary"
          class="settlement-button"
          @click="$router.push('/cartlist')"
          >去购物车结算</el-button
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart,
.cart-content {
  position: relative;
}
.cart > i {
  font-size: 20px;
}
.cart > span {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  border-radius: 50%;
  width: 20px;
  height: 15px;
  color: white;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
}

.cart-layer {
  position: absolute;
  top: 50px;
  right: 0px;
  padding: 10px;
  width: 400px;
  height: 400px;
  background-color: #f5f5f5;
  border-radius: 5px;
  display: none;
}
.cart-layer > ul {
  width: 400px;
  height: 300px;
}
.cart-layer > ul > li {
  display: flex;
  margin-bottom: 10px;
}
.cart-layer > ul > li > img {
  margin-right: 15px;
  width: 80px;
  height: 80px;
  background-color: red;
}
.cart-layer > ul > li > .name-desc {
  width: 200px;
}
.cart-layer > ul > li > .name-desc > p {
  font-size: 16px;
  color: #333333;
}
.cart-layer > ul > li > .name-desc > .desc {
  font-size: 12px;
  color: #999999;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 200px;
}
.price-count {
  margin-top: 15px;
  width: 80px;
  text-align: center;
}
.price-count > p {
  font-size: 16px;
  color: red;
}
.price-count > span {
  font-size: 14px;
  color: #999999;
}
.total {
  padding: 0px 10px;
  width: 400px;
  height: 100px;
  display: flex;
  align-items: center;
}
.total-price {
  flex: 1;
}
.total-price > p {
  font-size: 16px;
  color: #999999;
}
.total-price > span {
  font-size: 16px;
  color: red;
}
.cart-layer > ul > li > i {
  display: none;
  line-height: 80px;
  text-align: center;
}
.cart-layer > ul > li:hover > i {
  display: block;
}
.cart-content :hover > .cart-layer {
  display: block;
}
</style>