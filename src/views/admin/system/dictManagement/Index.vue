<script setup lang="ts">
import { ref, reactive } from 'vue'
import Table from '@/components/table/Index.vue'
import MForm from '@/components/form/Index.vue'
import MButton from '@/components/MButton.vue'
// import MCheckboxGroup from '@/components/form/MCheckboxGroup.vue'
import { form, formList, rules, tableParams } from './index'
import type { FormInstance } from 'element-plus'
// import { Operation, CaretBottom } from '@element-plus/icons-vue'
import { formUtils } from '@/utils'
import { dictForm, dictRules, dictFormList, DictvalueForm } from './detail'

// 这里分页变化导致的请求响应
// function slotPageChange(val: any) {
// 	console.log(val, val.value.currentPage, 'slotPageChange')
// }
// 添加
const handleAdd = () => {
	isShowDetail.value = true
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
// ---- 表单
const childComp = ref(null)
const submitForm = () => {
	const { validate } = formUtils
	const _ref = (childComp.value as any).ruleFormRef
	validate(_ref)
}
const resetForm = () => {
	const { resetForm } = formUtils
	const _ref = (childComp.value as any).ruleFormRef
	resetForm(_ref)
}
const buttons = reactive([
	{
		innerText: 'BUTTON_LANGUAGE_I18N.search',
		type: 'success',
		events: { click: submitForm },
	},
	{
		innerText: 'BUTTON_LANGUAGE_I18N.reset',
		type: 'warning',
		events: { click: resetForm },
	},
	{
		innerText: 'BUTTON_LANGUAGE_I18N.add',
		type: 'primary',
		events: { click: handleAdd },
	},
])
// 详情
const isShowDetail = ref<boolean>(false)
const DictFormRef = ref<FormInstance>()

const submitDictForm = () => {
	isShowDetail.value = false
}
const cancelDictForm = () => {
	isShowDetail.value = false
	DictvalueForm.dictValues = []
}
// 添加
const handleDictAdd = () => {
	DictvalueForm.dictValues.push({
		key: '',
		value: '',
	})
	console.log('handleAdd')
}
// 删除
const deleteDictItem = (index: number) => {
	DictvalueForm.dictValues.splice(index, 1)
	console.log('deleteDictItem')
}
const dictButtons = reactive([
	{
		innerText: 'BUTTON_LANGUAGE_I18N.add',
		type: 'success',
		events: { click: handleDictAdd },
	},
])
</script>

<template>
	<div class="w-full">
		<!-- <div class="w-full"> -->
		<MForm
			class="cont"
			id="user-form"
			ref="childComp"
			:form="form"
			:list="formList"
			:rules="rules"
			label-width="60px"
		>
			<div class="flex flex-end">
				<MButton
					v-for="item in buttons"
					:key="item.type + 'MButton'"
					v-bind="item"
					v-on="item.events"
				>
				</MButton>
			</div>
		</MForm>
		<div class="cont">
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
						{{ $t('BUTTON_LANGUAGE_I18N.operation') }}
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
		</div>
		<!-- </div> -->
	</div>
	<el-dialog
		draggable
		@close="cancelDictForm"
		style="width: 80%; max-width: 800px"
		v-model="isShowDetail"
		:title="$t('DICT_MANAGEMENT_LANGUAGE_I18N.detailTitle')"
		destroy-on-close
	>
		<MForm
			label-width="60px"
			style="margin-bottom: 20px; border-bottom: 1px solid #c8c8c8"
			ref="DictFormRef"
			:inline="true"
			:form="dictForm"
			:list="dictFormList"
			:rules="dictRules"
		>
			<MButton
				v-for="item in dictButtons"
				:key="item.type + 'MButton'"
				v-bind="item"
				v-on="item.events"
			>
			</MButton>
		</MForm>
		<el-form label-width="60px" ref="DictvalueFormRef" :model="DictvalueForm" inline="true">
			<div
				style="display: flex; justify-content: flex-start"
				v-for="(item, index) in DictvalueForm.dictValues"
				:key="item.key + 'dictValues'"
			>
				<el-form-item
					:prop="item.key"
					:label="$t('DICT_MANAGEMENT_LANGUAGE_I18N.dictValue')"
					:rules="[
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
					]"
				>
					<el-input v-model="item.key" />
				</el-form-item>
				<el-form-item
					:prop="item.value"
					:label="$t('DICT_MANAGEMENT_LANGUAGE_I18N.dictName')"
					:rules="[
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
					]"
				>
					<el-input v-model="item.value" />
				</el-form-item>
				<el-button type="danger" @click="deleteDictItem(index)">{{
					$t('BUTTON_LANGUAGE_I18N.delete')
				}}</el-button>
			</div>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="submitDictForm">{{
					$t('BUTTON_LANGUAGE_I18N.submit')
				}}</el-button>
				<el-button type="primary" @click="cancelDictForm">
					{{ $t('BUTTON_LANGUAGE_I18N.cancel') }}
				</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<style scoped>
.cont {
	padding: 10px;
	border-radius: 8px;
	background: #fff;
	margin-bottom: 20px;
}

.th-cont {
	position: relative;
}
</style>
