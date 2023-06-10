import httpInstance from '../utlis/http'
export function getCaregoryHeadApi() {
    return httpInstance({
        url: '/home/category/head'
    })
}
// export function getSecondCaregoryApi() {
//     return httpInstance({
//         url: '/home/goods'
//     })
// }