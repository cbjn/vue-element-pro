import request from 'utils/request'

//登录
export function login(params) {
    return request({
        url: '/api/login',
        method: 'post',
        data: params
    })
}