import { reactive } from 'vue'

export const dictForm = reactive({
	dictName: '',
	dictValue: '',
})
export const dictRules = reactive({
	dictName: [
		{
			required: true,
			message: 'Please input name',
			trigger: 'blur',
		},
	],
})
export const dictFormList = reactive([
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

interface DictvalueFormItem {
	key: string
	value: string
}
export const DictvalueForm = reactive({
	dictValues: <any>[],
})
