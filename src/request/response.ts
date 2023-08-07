import { ENUM_RESPONSE_TYPE } from '@/enum'
import { code_callback } from './code_callback'

const Rules = {
	json: async (res: Response) => {
		// {
		// 	"code": "200",
		// 		"data": "",
		// 			"msg": "OK",
		// 				"success": true
		// }
		const _res = await res.json()
		console.log(_res, 'Response')
		code_callback(_res)
		// return res.json()
	},
}

export const response_callback = (
	res: Response,
	type: ENUM_RESPONSE_TYPE = ENUM_RESPONSE_TYPE.JSON,
) => {
	return Rules[type](res)
}
