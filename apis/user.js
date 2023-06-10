import http from "../utlis/http";

export function toLogin({account,password}) {
    return http({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}
