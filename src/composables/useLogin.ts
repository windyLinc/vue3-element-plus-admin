import { useRouter } from 'vue-router'
import { useLoginSettingStore } from '@/store'

const router = useRouter()
export function useLogout(isClear: Boolean) {
	const dispatch = useLoginSettingStore()
	const backTologin = () => {
		location.href = `${import.meta.env.VITE_LOGIN_URL}?redirectUrl=${
			import.meta.env.VITE_LOGIN_REDIRECT_URL
		}`
		// const _redirectUrl = import.meta.env.MODE === 'development' ? '/api' + url : import.meta.env.VITE_SERVICE_URL + URL
		// location.href = 'https://sso-new.opayweb.com/login?redirectUrl=https%3A%2F%2Fad-easemoni-test.opayweb.com'
	}
	const clearStorage = () => {
		// emit('clearStorage')
		dispatch.clearLoginSetting()
	}
	isClear && clearStorage()
	backTologin()
}
