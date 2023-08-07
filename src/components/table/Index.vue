<script lang="ts" setup>
import { computed } from 'vue'
// import { EXCLUDE_COLUMNS } from '@/config/table'
import Column from './Column.vue'
import { Refresh, Operation, CaretBottom } from '@element-plus/icons-vue'

const props = defineProps({
	data: {
		type: Array,
		required: true,
	},
	options: {
		type: Array,
		required: true,
	},
	getter: Function,
	height: {
		type: [String, Number],
	},
	maxHeight: {
		type: [String, Number],
		default: 500,
	},
	isRefresh: {
		type: Boolean,
		default: true,
	},
	isShowPagination: {
		type: Boolean,
		default: true,
	},
	highlightCurrentRow: {
		type: Boolean,
		default: true,
	},
	emptyText: {
		type: String,
		default: 'No Data',
	},
	size: {
		type: String,
		default: 'default',
		validator(value: string) {
			return ['default', 'large', 'small'].includes(value)
		},
	},
	currentRowKey: {
		type: [String, Number],
	},
	rowClassName: {
		type: [Function, String],
	},
	cellClassName: {
		type: [Function, String],
	},
	headeRowClassName: {
		type: [Function, String],
	},
	headerCellClassName: {
		type: [Function, String],
	},
	rowKey: {
		type: [Function, String],
	},
	defaultSort: {
		type: Object,
		default: function () {
			return { order: 'descending' }
		},
		validator(value: object) {
			return [{ order: 'ascending' }, { order: 'descending' }].includes(value)
		},
	},
	tooltipEffect: {
		type: String,
		default: () => 'dark',
		validator(value: string) {
			return ['dark', 'light'].includes(value)
		},
	},
	getSelectionRows: Function,
	selectionChange: Function,
	sortChange: Function,
	filterChange: Function,
	rowClick: Function,
	selectAll: Function,
})

let emit = defineEmits(['refresh'])

const refresh = () => {
	emit('refresh')
}

// console.log(typeof props, Reflect.ownKeys(props))
// const normalizedProps = computed(() => {
// 	// let obj: any = {}
// 	// for (const key in props) {
// 	// 	if(!EXCLUDE_COLUMNS.includes(key)) {
// 	// 		obj[key] = (props as any)[key]
// 	// 	}
// 	// }
// 	return props
// })
// console.log(normalizedProps.value)
</script>
<template>
	<!-- 1. 接收一个tableData参数
	2. table表格整体接收配置选项对象, 表格参数options
		1. height 固定表头
		2. highlight-current-row 对应单选
		3. @current-change="handleCurrentChange"
		4. sort-by
		5. max-height
		6. empty-text
	3. 接收单元格参数数组, columns
		1. fixed 固定列
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
	<div class="flex flex-end">
		<div v-if="isRefresh" class="operation">
			<span @click="refresh">
				<el-icon>
					<Refresh />
				</el-icon>
			</span>
			<el-dropdown :hide-on-click="false" @visible-change="handleThs">
				<span>
					<el-icon>
						<Operation />
					</el-icon>
					<el-icon>
						<CaretBottom />
					</el-icon>
				</span>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item v-for="item in options" :key="item.prop">
							<el-checkbox :label="item.prop" size="small" v-model="item.isShow">
								{{ $t(item.label) }}
							</el-checkbox>
						</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
	<el-table stripe border style="width: 100%" v-bind="props">
		<!-- eslint-disable-next-line vue/no-v-for-template-key -->
		<template v-for="item in props.options" :key="item.prop">
			<Column v-if="item.isShow" v-bind="item"></Column>
		</template>
		<slot></slot>
	</el-table>
</template>
<style>
.el-table tr {
	min-height: 40px;
}
</style>

<style scoped>
.el-table {
	margin: 20px 0;
}

.operation {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100px;
	height: 30px;
	border: 1px solid var(--el-color-primary);
	border-radius: 8px;
}

.el-dropdown {
	height: 100%;
	line-height: 30px;
	flex: 1;
	border-left: 1px solid var(--el-color-primary);
}

.operation span {
	flex: 1;
	text-align: center;
	color: var(--el-color-primary);
	font-weight: bold;
	cursor: pointer;
}
</style>
