import axios from 'axios'
import qs from 'qs'
import router from "@/router"

const showStatus = (status) => {
    let message = ''
    switch (status) {
        case 400:
            message = '请求错误(400)'
            break
        case 401:
            router.push('/401')
            message = '未授权，请重新登录(401)'
            break
        case 403:
            message = '拒绝访问(403)'
            break
        case 404:
            message = '请求出错(404)'
            break
        case 408:
            message = '请求超时(408)'
            break
        case 500:
            message = '服务器错误(500)'
            break
        case 501:
            message = '服务未实现(501)'
            break
        case 502:
            message = '网络错误(502)'
            break
        case 503:
            message = '服务不可用(503)'
            break
        case 504:
            message = '网络超时(504)'
            break
        case 505:
            message = 'HTTP版本不受支持(505)'
            break
        default:
            message = `连接出错(${status})!`
    }
    return `${message}，请检查网络或联系管理员！`
}

let baseUrl = process.env.VUE_APP_BASE_API;

const service = axios.create({
    // 联调
    baseURL: baseUrl,
})

// 请求拦截器
service.interceptors.request.use((config) => {
    // if (config.method == "post") {
    //     config.data = qs.stringify(config.data);
    // }
    // let myToken = SessionData.getToken();
    // // 每次发送请求之前在http请求的header都加上token，不用每次请求都手动添加了
    // if (myToken) {
    //     config.headers['Authorization'] = myToken;
    // }
    //第三方请求
    // if (config.otherRequest) {
    //     config.baseURL = "";
    // }

    return config
}, (error) => {
    // 错误抛到业务代码
    error.data = {}
    error.data.msg = '服务器异常，请联系管理员！'
    return Promise.resolve(error)
})

// 响应拦截器
service.interceptors.response.use((response) => {
    const code = parseInt(response.data.code);
    const status = response.status;
    let msg = ''
    if (code < 200 || code >= 300) {
        // 处理http错误，抛到业务代码
        msg = showStatus(code)
        if (typeof response.data === 'string') {
            response.data = {
                msg
            }
        } else {
            response.data.errmsg = msg;
        }
    }
    return response
}, (error) => {
    // 错误抛到业务代码
    error.data = {}
    error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
    return Promise.resolve(error)
})

//all是静态方法，静态方法的调用只能通过类名点(className.)的方式调用，解决办法就是在你创建的实例中将静态方法赋值给我们的实例
service.all = axios.all;

export default service