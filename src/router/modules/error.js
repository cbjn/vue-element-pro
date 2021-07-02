//错误页路由
export default [{
    path: '/401',
    name: '401',
    component: () =>
        import ('@/views/error/401.vue'),
    hidden: true,
}]