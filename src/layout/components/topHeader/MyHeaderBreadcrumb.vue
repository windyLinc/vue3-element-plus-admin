<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
let route = useRoute() // route

// defineProps<{ msg: string }>()
// const breadList = ref<Array<string>>([])
const list = computed(() => {
	let arr = []
	if (route.matched && route.matched.length > 0) {
		for (const routeInfo of route.matched) {
			let name: string = routeInfo.meta.name as string
			if (typeof name === 'string') {
				arr.push(name)
				// console.log(routeInfo.name);
			}
		}
		// console.log(breadList.value)
		return arr
	}
	return []
})
// const getBreadNames = function () {
// 	breadList.value = []
// 	if (route.matched && route.matched.length > 0) {
// 		for (const routeInfo of route.matched) {
// 			let name: string = routeInfo.meta.name as string
// 			if (typeof name === 'string') {
// 				breadList.value.push(name)
// 				// console.log(routeInfo.name);
// 			}
// 		}
// 		// console.log(breadList.value)
// 	}
// }
// getBreadNames()
</script>

<template>
	<el-breadcrumb separator="/">
		<el-breadcrumb-item
			class="pointer"
			v-for="(item, index) in list"
			:key="index + 'breadList'"
			:to="{ path: `/${item}` }"
			style="cursor: pointer"
			>{{ item }}</el-breadcrumb-item
		>
	</el-breadcrumb>
</template>

<style scoped></style>
