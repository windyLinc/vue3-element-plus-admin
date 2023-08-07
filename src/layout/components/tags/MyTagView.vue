<script setup lang="ts">
// import { ref } from 'vue'

// defineProps<{ msg: string }>()

// const count = ref(0)
</script>

<template>
	<el-scrollbar ref="tagScrollContainer" :vertical="false">
		<slot></slot>
	</el-scrollbar>
</template>

<style scoped>
.scrollbar-flex-content {
	display: flex;
}
</style>
