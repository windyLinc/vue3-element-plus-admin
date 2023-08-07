const Rules = {
	form: (header: Headers) => {
		header.set('Content-Type', 'application/x-www-form-urlencoded')
	},
	json: (header: Headers) => {
		header.set('Content-Type', 'application/json')
	},
}

export const useHeader = (type: string, header: Headers) => Rules[type](header)
