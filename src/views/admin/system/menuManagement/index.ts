import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const doThis = (e: Event) => {
	console.log(e, 'doThis')
}
const doThat = (e: Event) => {
	console.log(e, 'doThat')
}
export const form = reactive({
	name: '',
})

export const rules = reactive({
	name: [
		{
			message: 'Please input name',
			trigger: 'blur',
		},
	],
})
export const formList = reactive([
	{
		type: 'input',
		items: {
			label: '菜单名称',
			prop: 'menuName',
		},
		prop: 'menuName',
		props: {
			placeholder: 'FORM_LANGUAGE_I18N.plsInput',
			// events: { input: doThis, focus: doThat },
			inputStyle: {
				maxWidth: '200px',
			},
		},
	},
	{
		type: 'input',
		items: {
			label: '层级',
			prop: 'level',
		},
		prop: 'level',
		props: {
			placeholder: 'FORM_LANGUAGE_I18N.plsInput',
			// events: { input: doThis, focus: doThat },
			inputStyle: {
				maxWidth: '200px',
			},
		},
	},
])

interface User {
	id: number
	code: string
	pcode: string
	url: string
	num: number
	levels: number
	name: string
	isMenuName: string
}
const options = [
	{
		label: 'FORM_LANGUAGE_I18N.id',
		prop: 'id',
		width: 50,
		isShow: true,
	},
	{
		label: '菜单名称',
		prop: 'name',
		isShow: true,
	},
	{
		label: '菜单编号',
		prop: 'code',
		isShow: true,
	},
	{
		label: '菜单父编号',
		prop: 'pcode',
		isShow: true,
	},
	{
		label: '请求地址',
		prop: 'url',
		isShow: true,
	},
	{
		label: '排序',
		prop: 'num',
		isShow: true,
	},
	{
		label: '层级',
		prop: 'levels',
		isShow: true,
	},
	{
		label: '是否是菜单',
		prop: 'isMenuName',
		isShow: true,
	},
]
// export const htOptions = ref(options.map((item: any) => {
// 	return {
// 		label: item.prop,
// 		value: item.label,
// 	}
// }))
export let tableOptions = reactive(options.slice(0))
const tableData: User[] = [
	{
		id: 1,
		code: '',
		name: 'Tom',
		url: '',
		pcode: '10',
		num: 1,
		levels: 1,
		isMenuName: 'No. 189, Grove St, Los Angeles',
	},
	{
		id: 2,
		code: '2016-05-02',
		name: 'John',
		url: '',
		pcode: '14',
		num: 1,
		levels: 1,
		isMenuName: 'No. 189, Grove St, Los Angeles',
	},
	{
		id: 3,
		code: '2016-05-04',
		name: 'Morgan',
		url: '',
		pcode: '20',
		num: 1,
		levels: 1,
		isMenuName: 'No. 189, Grove St, Los Angeles',
	},
	{
		id: 4,
		code: '2016-05-01',
		name: 'Jessy',
		url: '',
		pcode: '30',
		num: 1,
		levels: 1,
		isMenuName: 'No. 189, Grove St, Los Angeles',
	},
]
console.log(tableOptions, 'tableOptions')
export const tableParams = {
	options: tableOptions,
	data: tableData,
	size: 'small',
	maxHeight: '500',
	isRefresh: false,
}

export const addForm = reactive({
	roleName: '',
})

export const addRules = reactive({
	roleName: [
		{
			message: 'Please input name',
			trigger: 'blur',
		},
	],
})

export const addFormList = reactive([
	{
		type: 'input',
		items: {
			label: '角色名称',
			prop: 'roleName',
		},
		prop: 'roleName',
		props: {
			placeholder: 'FORM_LANGUAGE_I18N.plsInput',
			// events: { input: doThis, focus: doThat },
			inputStyle: {
				maxWidth: '200px',
			},
		},
	},
	{
		type: 'input',
		items: {
			label: '别名',
			prop: 'tips',
		},
		prop: 'tips',
		props: {
			placeholder: 'FORM_LANGUAGE_I18N.plsInput',
			// events: { input: doThis, focus: doThat },
			inputStyle: {
				maxWidth: '200px',
			},
		},
	},
	{
		type: 'input',
		items: {
			label: '上级名称',
			prop: 'pid',
		},
		prop: 'pid',
		props: {
			placeholder: 'FORM_LANGUAGE_I18N.plsInput',
			// events: { input: doThis, focus: doThat },
			inputStyle: {
				maxWidth: '200px',
			},
		},
	},
	{
		type: 'input',
		items: {
			label: '排序',
			prop: 'num',
		},
		prop: 'num',
		props: {
			placeholder: 'FORM_LANGUAGE_I18N.plsInput',
			// events: { input: doThis, focus: doThat },
			inputStyle: {
				maxWidth: '200px',
			},
		},
	},
	{
		type: 'input',
		items: {
			label: '部门名称',
			prop: 'deptid',
		},
		prop: 'deptid',
		props: {
			placeholder: 'FORM_LANGUAGE_I18N.plsInput',
			// events: { input: doThis, focus: doThat },
			inputStyle: {
				maxWidth: '200px',
			},
		},
	},
])
