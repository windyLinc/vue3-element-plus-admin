import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 登录路由
import LoginRouter from './login'
// 系统路由
import SystemRouter from './system'
import FunctionRouter from './function'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/system',
		meta: {},
	},
	// 登录路由
	...LoginRouter,
	// 系统路由
	{
		path: '/system',
		name: '系统',
		component: () => import('@/layout/index.vue'),
		meta: { id: 1, hidden: false, requiresAuth: true, name: 'system', icon: '<Setting />' },
		children: [...SystemRouter],
	},
	{
		path: '/function',
		name: '功能',
		component: () => import('@/layout/index.vue'),
		meta: { id: 1, hidden: false, requiresAuth: true, name: 'function', icon: '' },
		children: [...FunctionRouter],
	},
	// 404配置
	{
		path: '/404',
		name: '404',
		component: () => import('@/views/404.vue'),
		meta: {},
	},
	{
		path: '/:pathMatch(.*)',
		redirect: '/404',
		meta: {},
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/404',
		meta: {},
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

// router.beforeEach((to: any, from: any, next: any) => {
//   next()
// })

export default router
