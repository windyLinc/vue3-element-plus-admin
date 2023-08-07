<script setup lang="ts">
// import { ref } from 'vue'

// defineProps<{ msg: string }>()
function refreshSelectedTag() {}
function closeSelectedTag() {}
function closeOthersTags() {}
function closeAllTags() {}
// const count = ref(0)
</script>

<template>
	<ul>
		<li @click="refreshSelectedTag">Refresh</li>
		<li @click="closeSelectedTag">Close</li>
		<li @click="closeOthersTags">Close Others</li>
		<li @click="closeAllTags">Close All</li>
	</ul>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
