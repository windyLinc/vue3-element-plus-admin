<script setup lang="ts">
import { ref } from 'vue'
import MyHeader from '@/layout/views/MyHeader.vue'
import MyMenu from '@/layout/views/MyMenu.vue'
import MyMain from '@/layout/views/MyMain.vue'
// import { createWaterMaskCanvas as watermark } from '@/utils/waterMask'

const isShowMenu = ref<boolean>(true)

function toggleMenu(val: boolean) {
	isShowMenu.value = val
}
// watermark()
</script>

<template>
	<el-container class="h-full">
		<el-aside v-show="isShowMenu" width="200px" class="back-primary h-full m-menu">
			<MyMenu />
		</el-aside>
		<!-- <el-container> -->
		<div :class="isShowMenu ? 'w-full m-main' : 'w-full p-main'">
			<!-- <el-header> -->
			<MyHeader @toggleMenu="toggleMenu" v-bind:isShowMenu="isShowMenu"> </MyHeader>
			<!-- </el-header> -->
			<MyMain></MyMain>
		</div>
		<!-- </el-container> -->
	</el-container>
</template>

<style scoped>
.m-menu {
	height: 100%;
	position: fixed;
	font-size: 0;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: 1001;
	overflow: hidden;
}

.m-main {
	box-sizing: border-box;
	padding-left: 200px;
	overflow: hidden;
	/* background: rgba(0, 153, 102, .1); */
	/* margin-top: 80px; */
}

/* .m-header {
	position: fixed;
	top: 0;
	left: 200px;
	width: 100% - calc(200px);
} */

.p-main {
	padding-left: 0;
	overflow: hidden;
	/* background: rgba(102, 204, 153, .2); */
	/* margin-top: 80px; */
}

/* .p-header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
} */
</style>
