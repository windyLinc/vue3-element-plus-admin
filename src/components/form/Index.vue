<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MFormItem from './MFormItem.vue'
import MInput from './MInput.vue'
import MButton from '../MButton.vue'
import MSelect from './MSelect.vue'
import MDateTime from './MDateTime.vue'
import MDate from './MDate.vue'
import MDateTimeRange from './MDateTimeRange.vue'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<any>()
const props = defineProps({
	// isReset: {
	// 	type: Boolean,
	// },
	id: {
		type: String,
	},
	fer: {
		type: Object,
	},
	list: {
		type: Array,
	},
	form: {
		type: Object,
	},
	rules: {
		type: Object,
	},
	inline: {
		type: Boolean,
		default: true,
	},
	labelPosition: {
		type: String,
	},
	labelWidth: {
		type: String,
		default: '100px',
	},
	size: {
		type: String,
		default: 'default',
		validator(value: string) {
			return ['default', 'large', 'small'].includes(value)
		},
	},
})
// const resetForm = (formEl: FormInstance | undefined) => {
// 	if (!ruleFormRef.value) return
// 	console.log(formEl)
// 	formEl.resetFields()
// }
// const childisReset = ref(false)
// watch(
// 	() => props.isReset,
// 	(newProps) => {
// 		childisReset.value = newProps
// 		console.log(childisReset, newProps, props, 'childisReset')
// 		childisReset.value && resetForm(ruleFormRef)
// 	}
// );
const testFuc = () => {
	console.log('testFuc')
	onMounted(() => {
		console.log(ruleFormRef.value, 'ruleFormRef')
		console.dir(ruleFormRef.value)
	})
}
defineExpose({
	testFuc,
	ruleFormRef,
})
</script>
<template>
	<el-form
		:model="form"
		ref="ruleFormRef"
		:rules="rules"
		:inline="inline"
		:id="id"
		:size="size"
		:label-width="labelWidth"
		:label-position="labelPosition"
	>
		<MFormItem v-for="item in list" :key="item.prop" v-bind="item.items">
			<MButton v-if="item.type === 'button'" v-bind="item.props" v-model="form[item.prop]" />
			<MInput v-if="item.type === 'input'" v-bind="item.props" v-model="form[item.prop]" />
			<MSelect v-if="item.type === 'select'" v-bind="item.props" v-model="form[item.prop]" />
			<MDateTime
				v-if="item.type === 'datetime'"
				v-bind="item.props"
				v-model="form[item.prop]"
			/>
			<MDate v-if="item.type === 'date'" v-bind="item.props" v-model="form[item.prop]" />
			<MDateTimeRange
				v-if="item.type === 'datetimerange'"
				v-bind="form[item.prop]"
				v-model="item.model"
			/>
		</MFormItem>
		<slot></slot>
	</el-form>
</template>
<style scoped></style>
