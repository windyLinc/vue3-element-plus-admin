<script setup lang="ts">
const props = defineProps({
	isSlot: {
		type: Boolean,
	},
	label: {
		type: String,
	},
	prop: {
		type: String,
	},
	type: String,
	width: [String, Number],
	align: {
		type: String,
		default: 'left',
	},
	fixed: {
		type: [String, Boolean],
	},
	sortable: {
		type: [String, Boolean],
	},
	sortBy: {
		type: [Function, String, Array], //function(row, index),
		// default(rawProps: any) {
		// 	console.log(rawProps, rawProps.sortable)
		// 	return rawProps.prop
		// }
	},
	sortMethod: {
		type: Function,
	},
	filters: {
		type: Array<{ text: string; value: string }>,
	},
	filterMethod: {
		type: Function,
	},
	filterPlacement: {
		type: String,
	},
	filteredValue: {
		type: Array<any>,
	},
	formatter: {
		type: Function,
	},
	showOverflowTooltip: {
		type: Boolean,
	},
	className: {
		type: String,
	},
	labelClassName: {
		type: String,
	},
	selectable: {
		type: Function,
	},
	namedSlots: {
		type: String,
	},
	namedHeaderSlots: {
		type: String,
	},
})
</script>
<template>
	<!-- 1. fixed 固定列
	2. type index/selection 单选/多选
	3. show-overflow-tooltip 超出部分是否单行显示， 不重要
	4. sortable 排序 对应table的sort-by
	5. 过滤1	:filters="[
			{ text: '2016-05-01', value: '2016-05-01' },
			{ text: '2016-05-02', value: '2016-05-02' },
			{ text: '2016-05-03', value: '2016-05-03' },
			{ text: '2016-05-04', value: '2016-05-04' },
		]"
	6. 过滤2	:filter-method="filterHandler"
	7. 过滤3 filter-placement
	8. slot1 自定义单元格
	9. slot2 自定义表头 -->
	<el-table-column v-bind="props" :label="$t(label)" />
</template>
<style scoped></style>
