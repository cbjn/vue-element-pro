import { login } from "api/login"
import router from "@/router"
import { ElMessage } from 'element-plus'

export default {
    namespaced: true,
    state: () => ({
        token: "", //token
        username: ""
    }),
    mutations: {
        setToken(state, token) {
            state.token = token;
            sessionStorage.setItem('myToken', token); //同步存储token至sessionStorage
        },
        setUsername(state, username) {
            state.username = username;
            sessionStorage.setItem('myUser', username); //同步存储token至sessionStorage
        }
    },
    getters: {
        token: (state) => {
            if (!state.token) {
                state.token = sessionStorage.getItem('myToken')
            }
            return state.token
        },
        username: (state) => {
            if (!state.username) {
                state.username = sessionStorage.getItem('myUser')
            }
            return state.username
        }
    },
    actions: {
        /**
         * @description 登录
         * @param {*} { commit }
         * @param {*} userInfo
         */
        async login({ commit }, userInfo) {
            const { data } = await login(userInfo)
            let d = data.data;
            if (d == undefined) {
                ElMessage.error(data.msg);
            } else {
                const token = d.token;
                if (token) {
                    commit('setToken', token)
                    commit('setUsername', d.username)
                    router.push({ path: "/index" });
                } else {
                    ElMessage.error(data.errmsg);
                }
            }
        },
    }
}