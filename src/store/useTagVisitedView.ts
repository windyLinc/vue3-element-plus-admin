import { defineStore } from 'pinia'
import { sessionItem } from '@/utils'

// 路由状态管理
export const useTagVisitedViewStore = defineStore('tagViewStore', {
	state: () => ({
		visitedViews: sessionItem.getItem('visitedViews', 'object') ?? [],
	}),
	getters: {
		// getUserById: (state) => {
		// 	for(let route in )
		// 	return (userId) => state.users.find((user) => user.id === userId)
		// },
	},
	actions: {
		addVisitedViews(route: any) {
			// console.log(this.visitedViews, typeof this.visitedViews, 'visitedViews')
			let _route = this.visitedViews.find((item: any) => item.path === route.path)
			// console.log(_route, 'visitedViews')
			if (!_route) {
				this.visitedViews.push(route)
				sessionItem.setItem('visitedViews', JSON.stringify(this.visitedViews))
			}
		},
		delVisitedViews(route: any) {
			// console.log(this.visitedViews, typeof this.visitedViews, 'visitedViews')
			let _route = this.visitedViews.find((item: any) => item.path === route.path)
			// console.log(_route, 'visitedViews')
			if (_route) {
				// this.visitedViews = this.visitedViews.filter((v: any) => v.path !== route.path)
				let arr = this.visitedViews.filter((v: any) => v.path !== route.path)
				// console.log(arr, 'visitedViews')
				this.visitedViews = arr
				sessionItem.setItem('visitedViews', JSON.stringify(arr))
				// console.log(this.visitedViews, 'visitedViews')
			}
			console.log(this.visitedViews, 'visitedViews')
		},
		clearVisitedViews() {
			this.visitedViews = []
			sessionItem.rmItem('visitedViews')
		},
	},
})
export const useRouteCachedViewStore = defineStore('tagViewStore', {
	state: () => ({
		cachedViews: sessionItem.getItem('cachedViews') ?? <String[]>[],
	}),
	// getters: { },
	actions: {
		addCachedViews(route: String) {
			if (this.cachedViews.includes(route)) {
				this.cachedViews.push(route)
				sessionItem.setItem('cachedViews', JSON.stringify(this.cachedViews))
			}
			console.log(this.addCachedViews, 'addCachedViews')
		},
		delCachedViews(route: String) {
			if (this.cachedViews.includes(route)) {
				this.cachedViews = this.cachedViews.filter((v: string) => v !== route)
			}
			console.log(this.addCachedViews, 'addCachedViews')
		},
		clearCachedViews() {
			this.cachedViews = []
			sessionItem.rmItem('cachedViews')
		},
	},
})
