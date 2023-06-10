import http from '../utlis/http'
//获取一级分类数据
export function getCategoryDetailData(id) {
    return http({
        url: '/category',
        params: {
            id
        }
    })
}

//获取二级分类数据
export function getSecondCategoryData(id) {
    return http({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}

//获取二级分类商品数据
export function getSecondGoodsData(data) {
    return http({
        url: '/category/goods/temporary',
        method: 'POST',
        data
    })
}
