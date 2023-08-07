import request from '@/request'
import { ENUM_RESPONSE_TYPE } from '@/enum'

// 列表
const USER_MANAGEMENT_SERVICE_LIST: string = '/mgr/list'
export const USER_MANAGEMENT_SERVICE = (params: any) =>
	request({
		url: USER_MANAGEMENT_SERVICE_LIST,
		params: params,
	})
