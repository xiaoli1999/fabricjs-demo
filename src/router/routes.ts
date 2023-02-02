import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
    {
        name: 'home',
        path: '/',
        component: () => import(/* @vite-ignore 首页 */ '../views/Home.vue'),
        meta: { title: 'fabricjs-demo' }
    },
    {
        name: '1-create',
        path: '/1-create',
        component: () => import(/* @vite-ignore 1-create */ '../views/demo/1-create.vue'),
        meta: { title: '创建画布', time: '2023-02-02 14:20', level: '基础', sort: 1 }
    },
    {
        name: '2-background',
        path: '/2-background',
        component: () => import(/* @vite-ignore 2-background */ '../views/demo/2-background.vue'),
        meta: { title: '画布背景', time: '2023-02-02 15:20', level: '基础', sort: 2 }
    }
]
