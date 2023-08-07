import request from '@/request'
import { ENUM_RESPONSE_TYPE, ENUM_HEADER_TYPE } from '@/enum'

const MENU_MANAGEMENT_SERVICE_LIST: string = '/menu/list'
const MENU_MANAGEMENT_SERVICE_ADD: string = '/menu/add'
const MENU_MANAGEMENT_SERVICE_EDIT: string = '/menu/edit'
const MENU_MANAGEMENT_SERVICE_TREELIST: string = '/menu/selectMenuTreeList'
const MENU_MANAGEMENT_SERVICE_REMOVE: string = '/menu/remove'
// 列表
export const USER_MANAGEMENT_LIST_SERVICE = (params: any) =>
	request({
		url: MENU_MANAGEMENT_SERVICE_LIST,
		params: params,
	})

// 新增
// request入参
// id:
// name: test
// code: 1000
// pcode: 105
// url: /test
// num: 1
// icon:
// ismenu: 1 //1 是
export const USER_MANAGEMENT_ADD_SERVICE = (params: any) =>
	request({
		url: MENU_MANAGEMENT_SERVICE_ADD,
		params: params,
	})

// 修改
// reuest入参同新增
export const USER_MANAGEMENT_EDIT_SERVICE = (params: any) =>
	request({
		url: MENU_MANAGEMENT_SERVICE_EDIT,
		params: params,
	})

// 菜单树
export const USER_MANAGEMENT_TREELIST_SERVICE = (params: any) =>
	request({
		url: MENU_MANAGEMENT_SERVICE_TREELIST,
		params: params,
	})

// remove
// request入参
// menuId: 233
export const USER_MANAGEMENT_REMOVE_SERVICE = (params: any) =>
	request({
		url: MENU_MANAGEMENT_SERVICE_REMOVE,
		params: params,
	})
