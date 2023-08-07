import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const doThis = (e: Event) => {
	console.log(e, 'doThis')
}
const doThat = (e: Event) => {
	console.log(e, 'doThat')
}

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
			label: '电话号码',
			prop: 'phone',
		},
		prop: 'phone',
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
			label: '用户ID',
			prop: 'userId',
		},
		prop: 'userId',
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
			label: 'bvn',
			prop: 'bvn',
		},
		prop: 'bvn',
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
			label: '虚拟账号',
			prop: 'virtualId',
		},
		prop: 'virtualId',
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
			label: 'wema账号',
			prop: 'wemaId',
		},
		prop: 'wemaId',
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
		label: '用户ID',
		prop: 'userId',
		width: 80,
		isShow: true,
	},
	{
		label: '用户姓名',
		prop: 'userName',
		isShow: true,
	},
	{
		label: '用户手机号',
		prop: 'phone',
		isShow: true,
	},
	{
		label: '用户邮箱',
		prop: 'email',
		isShow: true,
	},
	{
		label: 'BVN',
		prop: 'bvn',
		isShow: true,
	},
	{
		label: '银行账号',
		prop: 'bankAccount',
		isShow: true,
	},
	{
		label: '是否绑卡',
		prop: 'isBindDesc',
		isShow: true,
	},
	{
		label: '用户等级',
		prop: 'levels',
		isShow: true,
	},
	{
		label: '注册时间',
		prop: 'registerTime',
		isShow: true,
	},
	{
		label: '借款次数',
		prop: 'loanNumber',
		isShow: true,
	},
	{
		label: '虚拟账号',
		prop: 'virtualId',
		isShow: true,
	},
	{
		label: 'wema账号',
		prop: 'wemaId',
		isShow: true,
	},
]

export let tableOptions = reactive(options.slice(0))
