<script setup lang="ts">
// import { ref } from 'vue'
import { SYSTEM_SETTINGS, USER_SETTINGS } from '@/config/settings'

// defineProps<{ msg: string }>()

// const count = ref(0)
</script>

<template>
	<el-dropdown style="align-self: self-end">
		<span class="el-dropdown-link">
			<!-- 超级管理员 -->
			<el-icon :color="SYSTEM_SETTINGS.primaryBg" class="el-icon--right"
				><CaretBottom
			/></el-icon>
		</span>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item
					v-for="(value, index) in USER_SETTINGS[0]"
					:key="index + 'UserSetting'"
					>{{ value.name }}</el-dropdown-item
				>
				<!-- <el-dropdown-item disabled>Action 4</el-dropdown-item> -->
				<el-dropdown-item
					divided
					v-for="(value, index) in USER_SETTINGS[1]"
					:key="index + 'dividedUserSetting'"
					>{{ value.name }}</el-dropdown-item
				>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<style scoped>
.el-dropdown-link {
	cursor: pointer;
	color: var(--el-color-primary);
	font-size: var(--el-font-size-large);
	display: flex;
	align-items: center;
	outline: none;
}
</style>
