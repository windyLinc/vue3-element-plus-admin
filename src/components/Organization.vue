<script setup lang="ts">
import { reactive, ref } from 'vue'
import { OrganizationInterface } from '@/'

const organizationModel = ref<string>('')
const list = reactive<OrganizationInterface[]>([
	{
		name: '开发部',
		label: 1,
	},
	{
		name: '运营部',
		label: 2,
	},
	{
		name: '战略部',
		label: 3,
	},
])
</script>
<template>
	<div class="organization mb-12 w-100">
		<h3 class="organization-title w-full ft-info fs-large">组织机构</h3>
		<el-radio-group size="default" v-model="organizationModel">
			<el-radio-button
				style="display: block"
				v-for="item in list"
				:key="item.value"
				:label="item.label"
				>{{ item.name }}</el-radio-button
			>
		</el-radio-group>
	</div>
</template>
<style scoped>
.organization-title {
	padding: 10px;
	color: #409eff;
}

.el-radio-group {
	display: block;
}

.organization .el-radio-button__inner {
	border-left: var(--el-border);
	border-right: var(--el-border);
	border-top: var(--el-border);
}

.el-radio-button__inner:last-of-type {
	border-bottom: var(--el-border);
}

.w-100 {
	width: 100px;
}

.mb-12 {
	margin-bottom: 12px;
}
</style>
