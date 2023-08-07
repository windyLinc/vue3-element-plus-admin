<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TagScrollView from '@/layout/components/tags/MyTagView.vue'
import { useTagVisitedViewStore } from '@/store'

const route = useRoute()
const router = useRouter()
// 全局状态管理
const store = useTagVisitedViewStore()
const visitedViews = computed(() => {
	return store.visitedViews ?? []
})
// visitedViews.value.forEach(item => {
// 	console.log(item, typeof item)
// })
// 是否为激活路由
const isActive = (tag: any) => {
	return tag.path === route.path
}
// watch(route, (newX) => {
//   	console.log(route, newX)
// })

// defineProps<{ msg: string }>()
const backToLastTag = function (index: number) {
	if (visitedViews.value.length > 1) {
		let _index = index == 0 ? visitedViews.value.length - 1 : index - 1
		let _route = visitedViews.value[_index]
		// console.log(_route)
		isActive(_route)
		// router.push(_route.fullPath)
		router.push(_route.path)
	} else {
		router.push('/')
	}
	// const latestView = visitedViews.value.slice(-1)[0]
	// if (latestView) {
	// 	router.push(latestView.fullPath)
	// } else {
	// 	router.push('/')
	// }
}
const closeSelectedTag = function (tag: any, index: number) {
	backToLastTag(index)
	store.delVisitedViews(tag)
}
</script>

<template>
	<div class="tags-cont w-full">
		<TagScrollView>
			<div class="scrollbar-flex-content">
				<!-- <p>{{ JSON.stringify(visitedViews) }}</p>
				<p>{{ typeof(visitedViews) }}</p> -->
				<!-- <p v-for="item in 50" :key="item" class="scrollbar-item">
					{{ item }}
				</p> -->
				<router-link
					v-for="(tag, index) in visitedViews"
					ref="tag"
					:key="tag.path"
					:class="isActive(tag) ? 'active' : 'back-tag'"
					:to="{ path: tag.path, query: tag.query }"
					tag="span"
					class="scrollbar-item"
				>
					{{ tag.meta.name }}
					<el-icon @click.prevent.stop="closeSelectedTag(tag, index)">
						<CloseBold />
					</el-icon>
				</router-link>
			</div>
		</TagScrollView>
	</div>
</template>

<style scoped>
.tags-cont {
	height: 34px;
	/* background: rgba(102, 204, 153, .1); */
}

.back-tag {
	/* background: rgba(153, 204, 153, .15); */
	background: rgba(102, 204, 153, 0.1);
}

.scrollbar-item {
	display: inline-block;
	position: relative;
	cursor: pointer;
	height: 26px;
	line-height: 26px;
	border: 1px solid #d8dce5;
	color: #495060;
	border-radius: 4px;
	/* background: #fff; */
	/* background: rgba(102, 204, 153, .1); */
	padding: 0 8px;
	font-size: 12px;
	margin-left: 5px;
	margin-top: 4px;

	/* &.active {
	background-color: #42b983;
	color: #fff;
	border-color: #42b983;
	&::before {
		content: '';
		background: #fff;
		display: inline-block;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		position: relative;
		margin-right: 2px;
	}
	} */
}

.active {
	background-color: #42b983;
	color: #fff;
	border-color: #42b983;
}

.active::before {
	content: '';
	background: #fff;
	display: inline-block;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	position: relative;
	margin-right: 2px;
}

.scrollbar-item:first-of-type {
	margin-left: 15px;
}

.scrollbar-item:last-of-type {
	margin-right: 15px;
}
</style>
