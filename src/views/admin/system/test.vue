<script setup lang="ts">
import { ref, reactive } from 'vue'
import Table from '@/components/table/Index.vue'
import MForm from '@/components/form/Index.vue'

// 这里分页变化导致的请求响应
function slotPageChange(val: any) {
	console.log(val, val.value.currentPage, 'slotPageChange')
}

interface User {
	date: string
	name: string
	age: string
	address: string
}
const options = [
	{
		type: 'index',
		width: 50,
	},
	{
		label: 'date',
		prop: 'date',
		// width: 180,
	},
	{
		label: 'name',
		prop: 'name',
		// width: 180,
	},
	{
		label: 'address',
		prop: 'address',
		// width: 180,
	},
	{
		label: 'age',
		prop: 'age',
		sortable: true,
		sortBy: 'age',
		className: 'my-test',
	},
	{
		label: '操作',
	},
]
const tableData: User[] = [
	{
		date: '2016-05-03',
		name: 'Tom',
		age: '10',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-02',
		name: 'John',
		age: '14',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-04',
		name: 'Morgan',
		age: '20',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-01',
		name: 'Jessy',
		age: '30',
		address: 'No. 189, Grove St, Los Angeles',
	},
]
const tableParams = {
	options,
	data: tableData,
}
const search = ref('')
const handleDelete = (a: any, b: any) => {
	console.log(a, b, 'handleDelete')
}

// do not use same name with ref
const form = reactive({
	name: '',
	// region: '',
	// date1: '',
	// date2: '',
	// delivery: false,
	// type: [],
	// resource: '',
	// desc: '',
})
const doThis = (e: Event) => {
	console.log(e, 'doThis')
}
const doThat = (e: Event) => {
	console.log(e, 'doThat')
}
const formList = reactive([
	{
		type: 'input',
		items: {
			label: 'Name',
			prop: 'name',
			required: true,
			rules: [
				{
					required: true,
					message: 'Please input email address',
					trigger: 'blur',
				},
				{
					type: 'email',
					message: 'Please input correct email address',
					trigger: ['blur', 'change'],
				},
			],
		},
		props: {
			model: ref(''),
			placeholder: '请输入',
			events: { input: doThis, focus: doThat },
			inputStyle: {
				maxWidth: '200px',
			},
		},
	},
	{
		type: 'select',
		items: {
			label: 'Hoby',
			prop: 'Hoby',
			required: true,
			rules: [
				{
					required: true,
					message: 'Please input email address',
					trigger: 'blur',
				},
				{
					type: 'email',
					message: 'Please input correct email address',
					trigger: ['blur', 'change'],
				},
			],
		},
		props: {
			model: ref(''),
			placeholder: '选择',
			events: { input: doThis, focus: doThat },
			options: [
				{
					value: 'Option1',
					label: 'Option1',
				},
				{
					value: 'Option2',
					label: 'Option2',
				},
				{
					value: 'Option3',
					label: 'Option3',
				},
				{
					value: 'Option4',
					label: 'Option4',
				},
				{
					value: 'Option5',
					label: 'Option5',
				},
			],
		},
	},
])
// const list = computed(() => Reflect.ownKeys(form))

// const onSubmit = () => {
// 	console.log(form, 'submit!')
// }

// const formTest = ref('')
// const formItem = reactive({
// 	label: 'Email',
// 	classify: 'input',
// 	model: formTest,
// 	events: { input: doThis, focus: doThat },
// 	required: true,
// 	rules: [
// 		{
// 			required: true,
// 			message: 'Please input email address',
// 			trigger: 'blur',
// 		},
// 		{
// 			type: 'email',
// 			message: 'Please input correct email address',
// 			trigger: ['blur', 'change'],
// 		},
// 	]
// })
// const updateModel = (val: any) => {
// 	formTest.value = val
// 	console.log(formTest.value)
// }
// const formTest1 = ref('')
// const formItem1 = reactive({
// 	label: 'Test',
// 	classify: 'select',
// 	model: formTest1,
// 	events: { change: doThis, focus: doThat },
// 	options: [
// 		{
// 			value: 'Option1',
// 			label: 'Option1',
// 		},
// 		{
// 			value: 'Option2',
// 			label: 'Option2',
// 		},
// 		{
// 			value: 'Option3',
// 			label: 'Option3',
// 		},
// 		{
// 			value: 'Option4',
// 			label: 'Option4',
// 		},
// 		{
// 			value: 'Option5',
// 			label: 'Option5',
// 		},
// 	],
// 	clearable: true,
// })
// const updateModel1 = (val: any) => {
// 	formTest1.value = val
// 	console.log(formTest1.value)
// }
// const dynamicValidateForm = reactive<{
// 	domains: DomainItem[]
// 	email: string
// }>({
// 	domains: [
// 		{
// 			key: 1,
// 			value: '',
// 		},
// 	],
// 	email: '',
// })
// interface DomainItem {
// 	key: number
// 	value: string
// }
</script>

<template>
	<MForm :form="form" :list="formList" labelWidth="120px"></MForm>
	<!-- <el-form :model="form" label-width="120px"> -->
	<!-- <form-item v-bind="formItem" @updateModel="updateModel"></form-item>
	<el-form-item prop="email" label="Email" :rules="[
		{
			required: true,
			message: 'Please input email address',
			trigger: 'blur',
		},
		{
			type: 'email',
			message: 'Please input correct email address',
			trigger: ['blur', 'change'],
		},
	]">
		<el-input v-model="dynamicValidateForm.email" />
	</el-form-item>
	<form-item v-bind="formItem1" @updateModel="updateModel1"></form-item>
	<el-form-item>
		<el-button type="primary" @click="onSubmit">Create</el-button>
		<el-button>Cancel</el-button>
	</el-form-item> -->
	<!-- </el-form> -->
	<!-- <el-form-item label="Activity zone">
			<el-select v-model="form.region" placeholder="please select your zone">
				<el-option label="Zone one" value="shanghai" />
				<el-option label="Zone two" value="beijing" />
			</el-select>
		</el-form-item>
		<el-form-item label="Activity time">
			<el-col :span="11">
				<el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
			</el-col>
			<el-col :span="2" class="text-center">
				<span class="text-gray-500">-</span>
			</el-col>
			<el-col :span="11">
				<el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
			</el-col>
		</el-form-item>
		<el-form-item label="Instant delivery">
			<el-switch v-model="form.delivery" />
		</el-form-item>
		<el-form-item label="Activity type">
			<el-checkbox-group v-model="form.type">
				<el-checkbox label="Online activities" name="type" />
				<el-checkbox label="Promotion activities" name="type" />
				<el-checkbox label="Offline activities" name="type" />
				<el-checkbox label="Simple brand exposure" name="type" />
			</el-checkbox-group>
		</el-form-item>
		<el-form-item label="Resources">
			<el-radio-group v-model="form.resource">
				<el-radio label="Sponsor" />
				<el-radio label="Venue" />
			</el-radio-group>
		</el-form-item>
		<el-form-item label="Activity form">
			<el-input v-model="form.desc" type="textarea" />
		</el-form-item> -->
	<Table v-bind="tableParams">
		<el-table-column align="right">
			<template #header>
				<el-input v-model="search" size="small" placeholder="Type to search" />
			</template>
			<template #default="scope">
				<el-button size="small" @click="handleDelete(scope.$index, scope.row)"
					>Edit</el-button
				>
				<el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"
					>Delete</el-button
				>
			</template>
		</el-table-column>
	</Table>
</template>

<style scoped></style>
