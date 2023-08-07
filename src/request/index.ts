import { RequestInterface } from '@/types/interface'
import { ENUM_REQUEST_METHOD, ENUM_RESPONSE_TYPE, ENUM_HEADER_TYPE } from '@/enum'
import { response_callback } from './response'
import { error_callback } from './error'
import { useHeader } from './header'
import { SERVICE_HOST } from './service_host'
// 请求封装
// 返回头里面看到有个，uid: admin
const Rules = {
	GET: async function (url: string, params: any): Promise<Response> {
		let list: string[] = []
		for (let key in params) {
			let str = `${key}=${params[key]}`
			list.push(str)
		}
		const _url: string = `${url}?${list.join('&')}`
		const res: Response = await fetch(_url)
		return res
	},
	POST: async function (
		url: string,
		params: any,
		headerType: ENUM_HEADER_TYPE,
	): Promise<Response> {
		let myHeaders = new Headers()
		useHeader(headerType, myHeaders)
		// let formData = new FormData()
		// for (let key in params) {
		// 	formData.append(key, params[key])
		// }
		console.log(params, 'params')
		const res: Response = await fetch(url, {
			body: params ? JSON.stringify(params) : '',
			headers: myHeaders,
			method: 'POST',
			credentials: 'include',
		})
		return res
	},
}
//
const request = async (param: RequestInterface) => {
	let { url, params, headerType, type, method } = param
	url = SERVICE_HOST(url)
	// console.log(url, 'SERVICE_HOST')
	headerType = headerType ?? ENUM_HEADER_TYPE.JSON
	method = method ?? ENUM_REQUEST_METHOD.POST
	type = type ?? ENUM_RESPONSE_TYPE.JSON
	const result = await Rules[method](url, params, headerType)
		.then((res: any) => {
			if (res.status == 200) {
				return response_callback(res, type)
			} else {
				// 报错
				return res
			}
		})
		.catch((err: any) => {
			error_callback(err, url)
			console.log(err)
		})
	return result
}

export default request
