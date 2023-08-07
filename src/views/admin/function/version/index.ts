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
		label: '创建时间',
		prop: 'storedTime',
		isShow: true,
	},
	{
		label: 'APP类型',
		prop: 'appType',
		isShow: true,
	},
	{
		label: '序列',
		prop: 'id',
		isShow: true,
	},
	{
		label: '应用平台',
		prop: 'platform',
		isShow: true,
	},
	{
		label: '当前最新版本',
		prop: 'version',
		isShow: true,
	},
	{
		label: '不提示升级版本',
		prop: 'update0Type',
		isShow: true,
	},
	{
		label: '提示升级版本',
		prop: 'update1Type',
		isShow: true,
	},
	{
		label: '强制升级版本',
		prop: 'update2Type',
		isShow: true,
	},
	{
		label: '提示升级文案标题',
		prop: 'updateTitle',
		isShow: true,
		width: 150,
	},
	{
		label: '提示升级文案内容',
		prop: 'updateDetail',
		isShow: true,
		width: 150,
	},
	{
		label: '升级url',
		prop: 'updateUrl',
		isShow: true,
		width: 150,
	},
	{
		label: '强制升级文案标题',
		prop: 'update2Title',
		isShow: true,
		width: 170,
	},
	{
		label: '强制升级文案内容',
		prop: 'update2Detail',
		isShow: true,
		width: 170,
	},
]

export let tableOptions = reactive(options.slice(0))
