import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'

let orginPush = VueRouter.prototype.push
let orginReplace = VueRouter.prototype.replace
// call和apply的区别
// 相同点：都可以调用函数一次，都可以篡改或函数的上下文
// 不同点：call传递参数用逗号隔开，apply传递数组
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        orginPush.call(this, location, resolve, reject)
    } else {
        orginPush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        orginReplace.call(this, location, resolve, reject)
    } else {
        orginReplace.call(this, location, () => { }, () => { })
    }
}
export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            meta: { show: true }
        },
        {
            path: "/search/:keywords?",
            component: Search,
            meta: { show: true },
            name: 'search',
            // 布尔值写法
            // props:true
            // 对象写法
            // props:{a:1,b:2}
            // 函数写法
        },
        {
            path: "/register",
            component: Register,
            meta: { show: false }
        },
        {
            path: "/login",
            component: Login,
            meta: { show: false }
        },
        // 重定向
        {
            path: '/',
            redirect: '/home'
        }
    ]
})