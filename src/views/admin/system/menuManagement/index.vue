<script setup lang="ts">
import { ref, reactive } from 'vue'
import Table from '@/components/table/Index.vue'
import MForm from '@/components/form/Index.vue'
import MButton from '@/components/MButton.vue'
// import MCheckboxGroup from '@/components/form/MCheckboxGroup.vue'
import {
	form,
	formList,
	tableOptions,
	rules,
	tableParams,
	addForm,
	addFormList,
	addRules,
} from './index'
// import type { FormInstance } from 'element-plus'
import { formUtils } from '@/utils'

// 这里分页变化导致的请求响应
function slotPageChange(val: any) {
	console.log(val, val.value.currentPage, 'slotPageChange')
}
// 刷新
const handleRefresh = () => {
	console.log('handleRefresh')
}
// 添加
const handleAdd = () => {
	console.log('handleAdd')
}
// handleThs
const handleThs = () => {
	console.log(tableOptions, 'handleThs')
}
// 修改
const handleEdit = (scope: any) => {
	console.log(scope, 'handleEdit')
}
// 删除
const handleDelete = (scope: any) => {
	console.log(scope, 'handleDelete')
}
// 权限配置
const handleReset = (scope: any) => {
	console.log(scope, 'handleReset')
}

// ---- 表单
const childComp = ref(null)
const submitForm = () => {
	const { validate } = formUtils
	const _ref = (childComp.value as any).ruleFormRef
	validate(_ref)
}
// 添加弹窗
const showAddDialog = ref<boolean>(false)
const add = () => {
	showAddDialog.value = !showAddDialog.value
}
const buttons = reactive([
	{
		innerText: 'BUTTON_LANGUAGE_I18N.search',
		type: 'primary',
		events: { click: submitForm },
	},
	{
		innerText: 'BUTTON_LANGUAGE_I18N.add',
		type: 'warning',
		events: { click: add },
	},
])
</script>

<template>
	<div>
		<h5 class="title">菜单管理</h5>
		<MForm
			class="user-form"
			id="user-form"
			ref="childComp"
			:form="form"
			:list="formList"
			:rules="rules"
		>
			<MButton
				v-for="item in buttons"
				:key="item.type + 'MButton'"
				v-bind="item"
				v-on="item.events"
			>
			</MButton>
		</MForm>

		<Table v-bind="tableParams" @slotPageChange="slotPageChange">
			<el-table-column
				width="300"
				align="left"
				fixed="right"
				class="user-column"
				style="justify-content: flex-start"
			>
				<template #header>
					<!-- <el-input v-model="search" size="small" placeholder="Type to search" /> -->
					{{ $t('FORM_LANGUAGE_I18N.operation') }}
				</template>
				<template #default="scope">
					<!-- <el-button size="small" style="margin-left: 0;margin-right: 12px;" type="danger"
							@click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
					<el-button
						size="small"
						style="margin-left: 0; margin-right: 12px"
						type="warning"
						@click="handleEdit(scope)"
						>{{ $t('BUTTON_LANGUAGE_I18N.remind') }}</el-button
					>
					<el-button
						size="small"
						style="margin-left: 0; margin-right: 12px"
						type="danger"
						@click="handleDelete(scope)"
						>{{ $t('BUTTON_LANGUAGE_I18N.delete') }}</el-button
					>
				</template>
			</el-table-column>
		</Table>
		<!-- 添加弹窗 -->
		<el-dialog v-model="showAddDialog" title="添加角色">
			<MForm
				class="add-form"
				id="add-form"
				ref="add"
				:inline="false"
				:form="addForm"
				:list="addFormList"
				:rules="addRules"
			>
			</MForm>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="showAddDialog = false">Cancel</el-button>
					<el-button type="primary" @click="showAddDialog = false"> Confirm </el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<style scoped>
.user-form {
	padding-top: 20px;
}

.title {
	font-size: 16px;
	color: var(--el-color-primary);
	padding-bottom: 10px;
	border-bottom: 1px solid #f3f3f4;
}

.th-cont {
	position: relative;
}
</style>
