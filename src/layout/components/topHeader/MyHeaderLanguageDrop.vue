<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { LANGUAGE_SETTINGS } from '@/config/settings'
import SvgIcon from '@/components/SvgIcon.vue'
import { useLangSettingStore } from '@/store'

const store = useLangSettingStore()
const { locale } = useI18n()
const handleLanguageChange = (command: string) => {
	store.setLangSetting(command)
	locale.value = command
}
defineProps({
	color: {
		type: String,
		default: '',
	},
	size: {
		type: [Number, String],
		default: 26,
	},
})
</script>

<template>
	<el-dropdown @command="handleLanguageChange">
		<span class="el-dropdown-link m-r-12">
			<SvgIcon icon-name="language_icon" :color="color" :size="size"></SvgIcon>
		</span>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item
					v-for="(item, index) in LANGUAGE_SETTINGS"
					:key="index + 'LanguageSetting'"
					:command="item.value"
					>{{ item.name }}</el-dropdown-item
				>
				<!-- <el-dropdown-item :divided="index === 0" v-for="(value, index) in UserSetting[0]" :key="index + 'UserSetting'">{{ value.name }}</el-dropdown-item> -->
				<!-- <el-dropdown-item>Action 2</el-dropdown-item>
				<el-dropdown-item>Action 3</el-dropdown-item>
				<el-dropdown-item disabled>Action 4</el-dropdown-item> -->
				<!-- <el-dropdown-item :divided="index === 0" v-for="(value, index) in UserSetting[1]" :key="index + 'dividedUserSetting'">{{ value.name }}</el-dropdown-item> -->
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<style scoped>
.el-dropdown-link {
	cursor: pointer;
	/* color: var(--el-color-primary); */
	/* font-size: var(--el-font-size-large); */
	display: flex;
	align-items: center;
	outline: none;
}
.m-r-8 {
	margin-right: 8px;
}
.m-r-12 {
	margin-right: 12px;
}
</style>
