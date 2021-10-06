import Layout from "@/layout/basic-layout.vue"
import { RouteRecordRaw } from "vue-router"

const TabbarRoutes: RouteRecordRaw = {
    name: 'root',
    path: '/',
    component: Layout,
    children: [
        {
            name: '首页',
            path: '/home',
            meta: {
                code: 'index',
                icon: 'home-o',
                title: "个性化定制首页"
            },
            component: () => import('@/pages/home/index.vue')
        },
        {
            name: '商城',
            path: '/shop',
            meta: {
                code: 'shop',
                icon: 'search',
                title: "个性化定制商城"
            },
            component: () => import('@/pages/shop/index.vue')
        },
        {
            name: "",
            path: '/mid',
            meta: {
                code: 'mid',
                title: "发布"
            },
            component: () => import('@/pages/shop/index.vue')
        },
        {
            name: '社区',
            path: '/community',
            meta: {
                code: 'community',
                icon: 'friends-o',
                title: "社区讨论"
            },
            component: () => import('@/pages/community/index.vue')
        },
        {
            name: '我的',
            path: '/profile',
            meta: {
                code: 'profile',
                icon: 'setting-o',
                title: '个人中心'
            },
            component: () => import('@/pages/profile/index.vue')
        },
    ]
}

export default TabbarRoutes;