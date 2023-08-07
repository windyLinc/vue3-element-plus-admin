<script setup lang="ts">
import { ref, reactive } from 'vue'
import request from '@/request'

import Table from '@/components/table/Index.vue'
import Pagination from '@/components/table/Pagination.vue'
import MForm from '@/components/form/Index.vue'
import Organization from '@/components/Organization.vue'
import MButton from '@/components/MButton.vue'
// import MCheckboxGroup from '@/components/form/MCheckboxGroup.vue'
import { formList, tableOptions, rules } from './index'
// import type { FormInstance } from 'element-plus'
import { formUtils } from '@/utils'

const queryParams = reactive({
	activityName: '',
	activityStatus: '',
})

const pagination = reactive({
	pageNo: 1,
	pageSize: 10,
	total: 0,
})

const tableParams = reactive({
	options: tableOptions,
	data: [],
})

const getList = () => {
	request({
		url: '/v1/version/list',
		params: {
			pageNo: pagination.pageNo,
			pageSize: pagination.pageSize,
		},
	}).then((res: any) => {
		console.log(res, 'getList')
		tableParams.data = res?.data.rows
		pagination.total = res?.data.total
	})
}

getList()

// 这里分页变化导致的请求响应
function slotPageChange(val: any) {
	console.log(val, val.value.currentPage, 'slotPageChange')
	queryParams.pageSize = val.value.currentPage
}
// 刷新
const handleRefresh = () => {
	console.log('handleRefresh')
}
// 添加
const handleAdd = () => {
	console.log('handleAdd')
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

const organizationModel = ref<number>()

// ---- 表单
const add = () => {}
const buttons = reactive([
	{
		innerText: 'FORM_LANGUAGE_I18N.add',
		type: 'warning',
		events: { click: add },
	},
])
</script>

<template>
	<div>
		<h5 class="title">版本管理</h5>
		<MButton
			v-for="item in buttons"
			:key="item.type + 'MButton'"
			v-bind="item"
			v-on="item.events"
		>
		</MButton>

		<Table v-bind="tableParams">
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
						>{{ $t('FORM_LANGUAGE_I18N.remind') }}</el-button
					>
					<el-button
						size="small"
						style="margin-left: 0; margin-right: 12px"
						type="danger"
						@click="handleDelete(scope)"
						>{{ $t('FORM_LANGUAGE_I18N.delete') }}</el-button
					>
				</template>
			</el-table-column>
		</Table>
		<Pagination v-bind="pagination" @pageChange="slotPageChange" />
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
	margin-bottom: 20px;
}

.th-cont {
	position: relative;
}
</style>
