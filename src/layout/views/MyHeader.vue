<script setup lang="ts">
import { ref } from 'vue'
// import { useRoute } from 'vue-router'
import MyTags from '@/layout/components/MyTags.vue'
import MyHeaderBreadcrumb from '@/layout/components/topHeader/MyHeaderBreadcrumb.vue'
import MyHeaderLanguageDrop from '@/layout/components/topHeader/MyHeaderLanguageDrop.vue'
import MyHeaderSystemConfigDrop from '@/layout/components/topHeader/MyHeaderSystemConfigDrop.vue'

import { SYSTEM_SETTINGS } from '@/config/settings'
import logoHeader from '@/assets/login.jpg'

// let route = useRoute() // route
// console.log('route', route.matched)

// defineProps<{ msg: string }>()
let emit = defineEmits(['toggleMenu'])
const props = defineProps(['isShowMenu'])

// 切换左侧菜单显隐的开关
const foldIcon = ref<boolean>(true)

// 切换左侧菜单显隐
const toggleMenu = function () {
	// console.log('props.isShowMenu', props.isShowMenu)
	foldIcon.value = !foldIcon.value
	emit('toggleMenu', !props.isShowMenu)
}
</script>

<template>
	<div class="header">
		<el-row justify="space-between" class="header-top">
			<el-col :span="12" class="h-40">
				<div class="flex flex-start align-center h-40">
					<el-icon :size="24" :color="SYSTEM_SETTINGS.linkTxt" class="fold-icon" @click="toggleMenu">
						<Fold v-if="foldIcon" />
						<Expand v-else />
					</el-icon>
					<MyHeaderBreadcrumb></MyHeaderBreadcrumb>
				</div>
			</el-col>
			<el-col :span="12" class="h-40">
				<div class="flex flex-end align-center h-40">
					<!-- <div class="m-r-8 logo-cont"> -->
					<MyHeaderLanguageDrop :color="SYSTEM_SETTINGS.baseGrey" size="26"></MyHeaderLanguageDrop>
					<img class="block brd-primary logo-header" :src="logoHeader" alt="" />
					<MyHeaderSystemConfigDrop></MyHeaderSystemConfigDrop>
				</div>
			</el-col>
		</el-row>
		<div class="flex flex-between tags">
			<MyTags></MyTags>
		</div>
	</div>
</template>

<style scoped>
.el-header {
	height: 60px;
	padding: 10px 20px;
}

.fold-icon {
	vertical-align: middle;
	margin-right: 8px;
}

.header {
	/* height: 40px; */
	/* padding: 10px 15px; */
}

.header-top {
	padding: 3px 10px;
	border-radius: 4px;
	/* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1); */
}

.logo-cont {
	/* width: 240px; */
}

.logo-header {
	/* background: url(@/assets/logo-back.png) 0 0 no-repeat; */
	/* background-size: 100% 100%; */
	/* background-color: #42b983; */
	width: 30px;
	height: 30px;
}

.tags {
	width: 100%;
	background: #fff;
	border-bottom: 1px solid #d8dce5;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
}

.h-40 {
	height: 40px;
}

.m-y-12 {
	margin: 12px 0;
}

.m-r-8 {
	margin-right: 8px;
}

.m-r-12 {
	margin-right: 12px;
}
</style>
