import { defineStore } from 'pinia'
import { localItem } from '@/utils'

// 路由状态管理
export const useLangSettingStore = defineStore('langSettingStore', {
	state: () => ({
		LANG_STATE: localItem.getItem('LANG_STATE', 'string') ?? 'zh',
	}),
	getters: {
		// getUserById: (state) => {
		// 	for(let route in )
		// 	return (userId) => state.users.find((user) => user.id === userId)
		// },
	},
	actions: {
		setLangSetting(_language: string) {
			this.LANG_STATE = _language ?? 'zh'
			localItem.setItem('LANG_STATE', _language ?? 'zh')
		},
	},
})
