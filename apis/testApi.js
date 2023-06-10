import http from "../utlis/http";

export function getTestData() {
    return http({
        url: 'home/category/head'
    })
}