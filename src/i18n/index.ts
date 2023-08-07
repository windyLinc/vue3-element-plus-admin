import { createI18n } from 'vue-i18n'

import zh from './lang/cn/index'
import en from './lang/en/index'
import piniaInJS from '@/store/storeInjs'
import { useLangSettingStore } from '@/store'
const store = useLangSettingStore(piniaInJS)

const i18n = createI18n({
	legacy: false, // 关掉，不然会组织失败
	locale: store.LANG_STATE ?? 'zh', // 设置语言表示
	globalInjection: true,
	messages: {
		// zh: {
		// 	SYSTEM_LANGUAGE_I18N:  {
		// 		system: '系统'
		// 	}
		// },
		zh,
		en,
	},
})
// console.log(zh)
export default i18n
