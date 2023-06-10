import http from '../utlis/http'

export function getGoodDetailData(id) {
    return http({
        url: '/goods',
        params: {
            id
        }
    })
}

export function getHotData({ id, type, limit = 3 }) {
    return http({
        url: '/goods/hot',
        params: {
            id,
            type,
            limit
        }
    })
}
