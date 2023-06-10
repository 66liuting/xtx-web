//用户数据信息管理

import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { toLogin } from "../../apis/user.js";
import { useCartStore } from "./carStore.js";

export const userUserStore = defineStore('user', () => {
    const cartStore=useCartStore()
    //定义管理数据用户的state
    const userInfo = ref({})
    //获取数据
    const getUserInfo = async ({ account, password }) => {
        const res = await toLogin({ account, password })
        userInfo.value = res.result
    }

    //清楚数据
    const clearUserinfo = () => {
        userInfo.value = {}
        cartStore.clearCartList()
    }

    //判断是否登录
    const isLogin = computed(() => {
        return userInfo.value.token
    })

    //以对象的格式返回相关数据和方法
    return {
        userInfo,
        isLogin,
        getUserInfo,
        clearUserinfo
    }


},
    {
        persist: true,
    }
)