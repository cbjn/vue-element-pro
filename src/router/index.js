import { createRouter, createWebHashHistory } from 'vue-router'
import vepRouter from "./modules/vep"
import errorRouter from "./modules/error"

// const originalPush = Router.prototype.push
//     // 重写了原型上的push方法，统一的处理了错误信息
// Router.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

export const constantRoutes = [{
        path: '/',
        redirect: to => {
            // 方法接收 目标路由 作为参数
            // return 重定向的 字符串路径/路径对象
            return '/login'
        }
    },
    ...vepRouter,
    ...errorRouter
]

// const createRouter = () => new Router({
//     // mode: 'history', // require service support
//     scrollBehavior: () => ({ y: 0 }),
//     routes: constantRoutes
// })

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter({
        history: createWebHashHistory(),
        scrollBehavior: () => ({ y: 0 }),
        routes: constantRoutes
    })
    router.matcher = newRouter.matcher // reset router
}

export default router