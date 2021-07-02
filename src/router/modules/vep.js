//vep路由
export default [{
    path: '/index',
    meta: {
        title: '首页',
    },
    component: () =>
        import ('@/views/index'),
}, {
    path: '/login',
    meta: {
        title: '登录',
    },
    component: () =>
        import ('@/views/login'),
}]