import http from '../utlis/http'

//加入购物车
export function addCartApi({
    skuId,
    count
}) {
    return http({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

//购物车列表
export function getCartListApi() {
    return http({
        url: '/member/cart',
    })
}

//删除购物车
export function delCartApi(ids) {
    return http(
        {
            url: '/member/cart',
            method: 'DELETE',
            data: {
                ids
            }

        }
    )

}