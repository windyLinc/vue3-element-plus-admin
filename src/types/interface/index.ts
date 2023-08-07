import { ENUM_REQUEST_METHOD, ENUM_RESPONSE_TYPE, ENUM_HEADER_TYPE } from '@/enum'
// 组织机构
export interface OrganizationInterface {
	name: string
	label: string
	value: number
}
// 请求request入参
export interface RequestInterface {
	url: string
	params: any
	headerType?: ENUM_HEADER_TYPE
	type?: ENUM_RESPONSE_TYPE
	method?: ENUM_REQUEST_METHOD
}
