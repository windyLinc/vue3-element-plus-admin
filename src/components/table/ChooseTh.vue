<script setup lang="ts">
import { Operation, CaretBottom } from '@element-plus/icons-vue'
const props = defineProps({
	tableOptions: Object,
})
// handleThs
const handleThs = () => {
	console.log(props.tableOptions, 'handleThs')
}
</script>
<template>
	<el-dropdown
		style="margin-left: 12px"
		size="small"
		max-height="200px"
		:hide-on-click="false"
		@visible-change="handleThs"
	>
		<el-button plain type="success" :icon="Operation">
			<el-icon class="el-icon--right" style="margin-left: -4px">
				<CaretBottom />
			</el-icon>
		</el-button>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item v-for="item in tableOptions" :key="item.prop">
					<el-checkbox :label="item.prop" size="small" v-model="item.isShow">{{
						$t(item.label)
					}}</el-checkbox>
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>
<style scoped></style>
