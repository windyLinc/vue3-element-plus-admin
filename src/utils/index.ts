const localRule = (key: string) => {
	return {
		string: localStorage.getItem(key),
		// object: localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as any) : [],
	}
}
const sessionRule = (key: string) => {
	return {
		string: sessionStorage.getItem(key),
		object: sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key) as any) : [],
	}
}
export const localItem = {
	getItem(key: string, type: string = 'string') {
		return (localRule(key) as any)[type]
	},
	setItem(key: string, value: string) {
		localStorage.setItem(key, value)
	},
	rmItem(key: string) {
		localStorage.removeItem(key)
	},
}
export const sessionItem = {
	getItem(key: string, type: string = 'string') {
		return (sessionRule(key) as any)[type]
	},
	setItem(key: string, value: string) {
		sessionStorage.setItem(key, value)
	},
	rmItem(key: string) {
		sessionStorage.removeItem(key)
	},
}

export const formUtils = {
	validate: (_ref: any, cb: Function, params: any) => {
		// return function () {
		setTimeout(() => {
			// console.log(childComp.value, childComp.value.ruleFormRef, 'childComp')
			// const _ref = (childComp.value as any).ruleFormRef
			_ref.validate((valid: boolean) => {
				if (!_ref) return
				if (valid) {
					console.log('submit!')
					cb(params)
				} else {
					console.log('error submit!')
					return false
				}
			})
		}, 700)
		// }
	},
	resetForm: (_ref: any) => {
		// return function () {
		console.log('reset form')
		setTimeout(() => {
			// const _ref = (childComp.value as any).ruleFormRef
			_ref.resetFields()
		}, 300)
		// }
	},
}
