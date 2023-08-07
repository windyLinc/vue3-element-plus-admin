import { ref, reactive } from 'vue'

export const form = reactive({
	name: '',
})

export const rules = reactive({
	name: [
		{
			required: true,
			message: 'Please input name',
			trigger: 'blur',
		},
	],
})
export const formList = reactive([
	{
		type: 'input',
		items: {
			label: 'FORM_LANGUAGE_I18N.dictName',
			prop: 'name',
			required: true,
		},
		prop: 'name',
		props: {
			placeholder: 'FORM_LANGUAGE_I18N.plsInput',
			// events: { input: doThis, focus: doThat },
			inputStyle: {
				maxWidth: '200px',
			},
		},
	},
])

const options = [
	{
		label: 'FORM_LANGUAGE_I18N.dictName',
		prop: 'name',
		isShow: true,
		// width: 180,
	},
	{
		label: 'FORM_LANGUAGE_I18N.detail',
		prop: 'detail',
		isShow: true,
		// width: 300,
	},
	{
		label: 'FORM_LANGUAGE_I18N.note',
		prop: 'note',
		isShow: true,
		// width: 180,
	},
]
export let tableOptions = reactive(options.slice(0))
const tableData: any[] = [
	{
		num: 0,
		name: '性别',
		pid: 0,
		id: 29,
		detail: '1:男,2:女',
	},
	{
		num: 0,
		name: '账号状态',
		pid: 0,
		id: 35,
		detail: '1:启用,2:冻结,3:已删除',
	},
	{
		num: 0,
		name: '这是一个字典测试',
		pid: 0,
		id: 54,
		detail: '1:测试1,2:测试2',
	},
	{
		num: 0,
		name: '测试',
		pid: 0,
		id: 57,
		detail: '1:测试1,2:测试2',
	},
]
export const tableParams = {
	options: tableOptions,
	data: tableData,
	size: 'default',
	maxHeight: '500',
	isRefresh: false,
	isShowPagination: false,
}
