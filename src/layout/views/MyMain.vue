<script setup lang="ts">
import { createWaterMaskCanvas as watermark } from '@/utils/waterMask'
// import { ref, computed } from 'vue'
// import { useRoute } from 'vue-router'

// const route = useRoute()
// defineProps<{ msg: string }>()

// const cachedViews = ref([])
// const key = computed(() => {
//   	return route.path
// })
watermark()
</script>

<template>
	<section class="app-main">
		<!-- <transition name="fade-transform" mode="out-in">
			<keep-alive :include="cachedViews">
				<router-view :key="key" />
			</keep-alive>
		</transition> -->
		<div class="inner-section">
			<router-view></router-view>
		</div>
	</section>
</template>

<style scoped>
.app-main {
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	padding: 20px;
	background: #f3f3f4;
}
.inner-section {
	height: 100%;
	padding: 20px;
	box-sizing: border-box;
	border-radius: 8px;
	background: #fff;
	height: calc(100% - 110px);
}
</style>
