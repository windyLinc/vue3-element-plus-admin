import { RouteRecordRaw } from 'vue-router'
import HomFunctionRouter from './hom/function'

const FunctionRouter: Array<RouteRecordRaw> = [
	{
		path: '/user',
		name: 'User',
		component: () => import('@/views/admin/function/user/index.vue'),
		meta: { id: 1, hidden: false, requiresAuth: true, name: 'User' },
	},
	{
		path: '/version',
		name: 'Version',
		component: () => import('@/views/admin/function/version/index.vue'),
		meta: { id: 1, hidden: false, requiresAuth: true, name: 'Version' },
	},
]
export default FunctionRouter
