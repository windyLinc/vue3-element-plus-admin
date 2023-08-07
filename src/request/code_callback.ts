import { ENUM_RESPONSE_TYPE } from '@/enum'
// code	string
// data
// msg	string
// success boolean
const Rules = {
	'200': (res: any) => {
		// {
		// 	"code": "200",
		// 		"data": "",
		// 			"msg": "OK",
		// 				"success": true
		// }
		// console.log(res, 'Response')
		console.log(res, res.data, 'code_callback')
		return res.data
		// return res.json()
	},
}

export const code_callback = (res: any) => {
	function log(res: any) {
		console.log(res, 'code_callback')
	}
	return (Rules[res.code] ?? log)(res)
}
