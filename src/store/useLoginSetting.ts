import { defineStore } from 'pinia'
import { localItem } from '@/utils'

// 路由状态管理
export const useLoginSettingStore = defineStore('langSettingStore', {
	state: () => ({
		USER_STATE: localItem.getItem('USER_STATE', 'string') ?? {},
	}),
	getters: {
		// getUserById: (state) => {
		// 	for(let route in )
		// 	return (userId) => state.users.find((user) => user.id === userId)
		// },
	},
	actions: {
		setLoginSetting(_user: string) {
			this.USER_STATE = _user
			localItem.setItem('USER_STATE', _user)
		},
		clearLoginSetting() {
			this.USER_STATE = ''
			localItem.rmItem('USER_STATE')
		},
	},
})
