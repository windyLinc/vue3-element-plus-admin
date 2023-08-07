import request from '@/request'

const DICT_MANAGEMENT_SERVICE_LIST = '/dict/list'
const DICT_MANAGEMENT_SERVICE_ADD = '/dict/add'
const DICT_MANAGEMENT_SERVICE_EDIT = '/dict/update'
const DICT_MANAGEMENT_SERVICE_REMOVE = '/dict/delete'
// 列表
export const DICT_MANAGEMENT_LIST_SERVICE = (params: any) =>
	request({
		url: DICT_MANAGEMENT_SERVICE_LIST,
		params: params,
	})

// 新增
// request入参
// dictName: test
// dictValues: ;
export const DICT_MANAGEMENT_ADD_SERVICE = (params: any) =>
	request({
		url: DICT_MANAGEMENT_SERVICE_ADD,
		params: params,
	})

// 修改
// reuest入参同新增
// dictId: 57
// dictName: 测试
// dictValues: 0: 性别; 1: 男; 2: 女; 0: 账号状态; 1: 启用; 2: 冻结; 3: 已删除; 0: 这是一个字典测试; 1: 测试1; 2: 测试2; 0: 测试; 1: 测试1; 2: 测试2; 0: test;
export const DICT_MANAGEMENT_EDIT_SERVICE = (params: any) => {
	return request({
		url: DICT_MANAGEMENT_SERVICE_EDIT,
		params: params,
	})
}

// remove
// request入参
// dictId
export const DICT_MANAGEMENT_REMOVE_SERVICE = (params: any) => {
	return request({
		url: DICT_MANAGEMENT_SERVICE_REMOVE,
		params: params,
	})
}
