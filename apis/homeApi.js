import httpInstance from '../utlis/http'

//获取轮播图
export function getBannerData(distributionSite) {
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
    
}

//获取新鲜好物
export function getNewGoodsData() {
    return httpInstance({
        url:'/home/new'
    })
}

//获取人气推荐
export function getHotGoodData() {
    return httpInstance({
        url:'/home/hot'
    })
}

//货物首页商品
export function getGoodData() {
    return httpInstance({
        url:'/home/goods'
    })
}