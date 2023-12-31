import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/index.vue'
import Layout from '../views/Layout/index.vue'
import Home from '../views/Home/index.vue'
import Category from '../views/Category/index.vue'
import SecondCategory from '../views/SecondCategory/index.vue'
import Detail from '../views/Detail/index.vue'
import CartList from '../views/CartList/index.vue'
import Order from '../views/Order/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: '/category/:id',
          component: Category
        },
        {
          path: '/category/second/:id',
          component: SecondCategory
        },
        {
          path: '/detail/:id',
          component: Detail

        },
        {
          path: '/cartlist',
          component: CartList

        },
        {
          path: '/order',
          component: Order

        }
      ]

    },
    {
      path: '/login',
      component: Login
    }

  ],
  //路由滚动行为定制,跳转的时候自动滑动到顶部
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
