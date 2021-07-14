import request from 'utils/request'

//登录
export function login(params) {
    return request({
        url: '/api/login',
        method: 'post',
        data: params
    })
}

//验证码
export function getCode(params) {
    return request({
        url: '/api/getCode',
        method: 'get',
        params: params
    })
}