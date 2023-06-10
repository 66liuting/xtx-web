import axios from "axios";
//提示
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { userUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";


// 创建axios实例
const http = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})
// axios请求拦截器
http.interceptors.request.use(config => {
    const userStore = userUserStore()
    //请求数据拼接token,根据后端的要求在请求头添加token
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}, e => Promise.reject(e))

// axios响应式拦截器
http.interceptors.response.use(res => res.data, e => {
    //错误提示
    ElMessage({ type: 'warning', message: e.response.data.message })
    const userStore = userUserStore()
    const router = useRouter()
    //token失效处理
    if (e.response.status === 401) {
        userStore.clearUserinfo()
        router.push({ path: '/login' })
    }

    return Promise.reject(e)
})

export default http



