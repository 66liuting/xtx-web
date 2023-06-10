//购物车信息

import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { userUserStore } from "./userStore";
import { addCartApi } from '../../apis/cart'
import { getCartListApi } from '../../apis/cart'
import { delCartApi } from '../../apis/cart'

export const useCartStore = defineStore('cart', () => {
    const userStore = userUserStore()
    //购物车数据
    const cartList = ref([])


    //货物购物车列表
    const getCartList = async () => {
        const res = await getCartListApi()
        cartList.value = res.result

    }

    //添加购物车
    const addCart = async (goods) => {
        if (userStore.isLogin) {
            const { skuId, count } = goods
            //已登录走接口-添加购物车，然后获取购物车列表
            await addCartApi({ skuId, count })
            getCartList()
        } else {
            //没有登录走本地购物车

            //对比是否存在相同的规格id
            const item = cartList.value.find(item => goods.skuId === item.skuId)
            if (item) {
                //存在相同的,数量+1
                item.count++
            } else {
                //存在不同的，添加数据
                cartList.value.push(goods)
            }
        }

    }

    //清除购物车
    const clearCartList = () => {
        cartList.value = []
    }


    //删除购物车
    const delCart = async (skuId) => {
        if (userStore.isLogin) {
            //网络删除
            await delCartApi([skuId])
            getCartList()
        } else {
            const index = cartList.value.findIndex(item => skuId === item.skuId)
            cartList.value.splice(index, 1)
        }

    }

    //单选购物车
    const singleCheck = (skuId, selected) => {
        const item = cartList.value.find(item => skuId === item.skuId)
        item.selected = selected
    }

    //全选
    const allCheck = (selected) => {
        cartList.value.forEach(element => {
            element.selected = selected
        });
    }

    //计算属性
    //总数量
    const allCount = computed(() => {
        let count = 0;
        cartList.value.forEach(element => {
            count += element.count
        });
        console.log(allCount)
        return count
    })
    //总价格
    const allPrice = computed(() => {
        let price = 0;
        cartList.value.forEach(element => {
            price += ((element.count * element.price))
        });
        console.log(price)
        return price
    })
    //判断是否全选
    const allSelect = computed(() => {
        return cartList.value.every(item => item.selected)
    })
    //已选商品总数量
    const selectCount = computed(() => {
        let count = 0
        cartList.value.forEach(element => {
            if (element.selected) {
                count += element.count
            }
        });
        return count
    })
    //已选商品总价格
    const selectPrice = computed(() => {
        let price = 0

        cartList.value.forEach(element => {
            if (element.selected) {
                price += (element.count * element.price)
            }
        });

        return price
    })

    return {
        cartList,
        allCount,
        allPrice,
        allSelect,
        selectCount,
        selectPrice,
        addCart,
        clearCartList,
        delCart,
        singleCheck,
        allCheck,
        getCartList

    }

}, {
    persist: true
})