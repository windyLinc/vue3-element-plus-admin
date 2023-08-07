<script lang="ts" setup>
// import type { Ref } from 'vue'
// import { PaginationOptions } from '@/config/pages'
import { usePagination } from '@/composables/usePagination'
let emit = defineEmits(['pageChange'])
const props = defineProps({
	pageNo: {
		type: Number,
		default: 1,
	},
	pageSize: {
		type: Number,
		default: 10,
	},
	total: {
		type: Number,
		required: true,
	},
	pageSizes: {
		type: Array,
		default: () => [10, 50, 100, 200, 300, 400],
	},
	layout: {
		type: String,
		default: 'total, sizes, prev, pager, next, jumper',
	},
})
const { handleSizeChange, handleCurrentChange, handlePrevChange, handleNextChange } = usePagination(
	emit,
	{
		pageNo: props.pageNo,
		pageSize: props.pageSize,
	},
)
// console.log(pagination.value, 'pagination')
</script>

<template>
	<el-pagination
		:currentPage="pageNo"
		background
		:pageSize="pageSize"
		:page-sizes="pageSizes"
		:layout="layout"
		:total="total"
		@size-change="handleSizeChange"
		@current-change="handleCurrentChange"
		@prev-click="handlePrevChange"
		@next-click="handleNextChange"
	/>
</template>

<style scoped>
.demo-pagination-block + .demo-pagination-block {
	margin-top: 10px;
}

.demo-pagination-block .demonstration {
	margin-bottom: 16px;
}

.el-pagination {
	justify-content: flex-end;
}
</style>
