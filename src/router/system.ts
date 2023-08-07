import { RouteRecordRaw } from 'vue-router'

const SystemRouter: Array<RouteRecordRaw> = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: () => import('@/views/admin/dashboard.vue'),
		meta: { id: 2, hidden: false, requiresAuth: true, name: 'dashboard' },
	},
	{
		path: '/dictManagement',
		name: 'DictManagement',
		component: () => import('@/views/admin/system/dictManagement/Index.vue'),
		meta: { id: 2, hidden: false, requiresAuth: true, name: 'dictManagement' },
	},
	{
		path: '/menuManagement',
		name: 'MenuManagement',
		component: () => import('@/views/admin/system/menuManagement/index.vue'),
		meta: { id: 2, hidden: false, requiresAuth: true, name: 'menuManagement' },
	},
]
export default SystemRouter
