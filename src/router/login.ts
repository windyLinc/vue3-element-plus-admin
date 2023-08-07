import { RouteRecordRaw } from 'vue-router'

const LoginRouter: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: '登录',
		component: () => import('../views/login/login.vue'),
		meta: { id: 2, hidden: false, name: 'login' },
	},
]
export default LoginRouter
