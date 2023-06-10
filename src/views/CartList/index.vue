<script setup>
import { useCartStore } from "@/stores/carStore";
// import { useRouter } from "vue-router";

const cartStore = useCartStore();
// const router=useRouter()

//选择
const singleCheck = (skuId, selected) => {
  cartStore.singleCheck(skuId, !selected);
};

//全选
const allCheck = (selected) => {
  cartStore.allCheck(selected);
};

// const toOrder=()=>{
//   console.log('----')
//   router.push('/order')
// }

</script>
<template>
  <div class="list">
    <div class="list-content">
      <table v-if="cartStore.cartList.length">
        <thead>
          <tr class="title">
            <th width="120">
              <el-checkbox
                :model-value="cartStore.allSelect"
                @change="allCheck"
              />
            </th>
            <th width="400">商品信息</th>
            <th width="220">单价</th>
            <th width="180">数量</th>
            <th width="180">小计</th>
            <th width="140">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartStore.cartList" :key="item">
            <th>
              <!-- 选择框 -->
              <el-checkbox
                :model-value="item.selected"
                @change="singleCheck(item.skuId, item.selected)"
              />
            </th>
            <th>
              <img :src="item.picture" alt="" />
              <span>{{ item.name }}</span>
            </th>
            <th>¥{{ item.price }}</th>
            <th>
              <el-input-number v-model="item.count" />
            </th>
            <th class="all-price">¥{{ item.count * item.price }}</th>
            <th>
              <el-popconfirm
                width="100"
                confirm-button-text="确认"
                cancel-button-text="取消"
                :icon="InfoFilled"
                icon-color="#626AEF"
                title="确认删除吗?"
                @confirm="cartStore.delCart(item.skuId)"
              >
                <template #reference>
                  <span class="del">删除</span>
                </template>
              </el-popconfirm>
            </th>
          </tr>
        </tbody>
      </table>
      <div class="null-content" v-else>
        <el-empty description="购物车列表为空">
          <el-button type="primary">随便逛逛</el-button>
        </el-empty>
      </div>
    </div>
    <div class="list-total">
      <p>
        共{{ cartStore.allCount }}件商品，已选择{{
          cartStore.selectCount
        }}件商品，商品合计：<span>¥{{ cartStore.selectPrice }}</span>
      </p>
      <el-button type="primary" @click="$router.push('/order')">下单结算</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-content,
.list-total {
  margin: 10px auto;
  width: 1240px;
  background-color: #fff;
}
.list-content > table {
  border-spacing: 0;
  border-collapse: collapse;
}

.list-content > table > thead > tr > th,
.list-content > table > tbody > tr > th {
  height: 60px;
  font-size: 18px;
  font-weight: normal;
  color: #666;
  border-bottom: 1px solid #f5f5f5;
}
.list-content > table > tbody > tr > th {
  padding: 10px 0px;
  font-size: 14px;
  height: 100px;
}
.list-content > table > tbody > tr > th > span {
  margin-left: 10px;
  font-size: 16px;
}
.list-content > table > tbody > tr > .all-price {
  color: red;
  font-size: 20px;
}
.list-content > table > tbody > tr > th > .del {
  color: $xtxColor;
  font-size: 14px;
  cursor: pointer;
}
.list-total {
  display: flex;
  height: 60px;
  align-items: center;
  padding: 0px 10px;
}
.list-total > p {
  flex: 1;
  font-size: 16px;
  color: #333;
}
.list-total > p > span {
  color: red;
}
.null-content {
  text-align: center;
}
</style>