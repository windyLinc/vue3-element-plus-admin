<script setup lang="ts">
import { ref } from 'vue'
import logoHeader from '@/assets/person.jpg'

// defineProps<{ msg: string }>()

const AccountName = ref('admin')
</script>

<template>
	<div class="logo-header back-primary">
		<img class="block logo-header_pic" :src="logoHeader" alt="" />
		<p class="ft-white fs-normal text-center lt-12">{{ AccountName }}</p>
	</div>
</template>

<style scoped>
.el-dropdown {
	width: 100%;
}

.el-dropdown-link {
	cursor: pointer;
	color: var(--el-color-white);
	font-size: var(--el-font-size-normal);
	display: flex;
	align-items: center;
	outline: none;
	margin: 0 auto;
}

.logo-header {
	/* background: url(../assets/logo-back.png) 0 0 no-repeat;
	background-size: 100% 100%; */
	padding: 12px;
	width: 180px;
	border-bottom: 1px solid #d8dce5;
}

.logo-header_pic {
	width: 30px;
	height: 30px;
	margin: 7px auto;
}

.lt-12 {
	line-height: 12px;
}
</style>
