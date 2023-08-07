<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter, RouteRecordRaw } from 'vue-router'

import MyAccount from '@/layout/components/MyAccount.vue'
import { SYSTEM_SETTINGS } from '@/config/settings'
import { EXCLUDE_ROUTES } from '@/config/routes'
import { useTagVisitedViewStore } from '@/store'

// type RouteType = {
// 	meta: any
// } & RouteRecordRaw
// interface MyRouteType extends RouteRecordRaw {
// 	meta: any
// }

const route = useRoute()
const router = useRouter()
const store = useTagVisitedViewStore()
const isCollapse = ref<boolean>(false)
const currentRoute = computed(() => {
	return router.currentRoute.value.path
})
watch(route, newX => {
	console.log(route, newX)
})
// console.log(currentRoute, router, 'route')
const routes: Array<RouteRecordRaw> = router.options.routes.filter(
	route => !EXCLUDE_ROUTES.includes(route.path),
)
// console.log(routes, 'routes')

const handleOpen = (_key: string, _keyPath: string[]) => {
	// console.log(key, keyPath)
}
const handleClose = (_key: string, _keyPath: string[]) => {
	// console.log(key, keyPath)
}
const handleSelect = (_key: string, _keyPath: string[], item: any, _routeResult: any) => {
	// console.log(store.visitedViews, item, routeResult, 'visitedViews')
	// item && store.addVisitedViews({[item.index] : item.route})
	item && store.addVisitedViews(item.route)
}
</script>

<template>
	<div class="back-primary h-full w-200">
		<MyAccount></MyAccount>
		<el-menu
			router
			:collapse="isCollapse"
			:default-active="currentRoute"
			:background-color="SYSTEM_SETTINGS.menu.bg"
			:active-text-color="SYSTEM_SETTINGS.menu.activeTxt"
			:text-color="SYSTEM_SETTINGS.menu.txt"
			@open="handleOpen"
			@close="handleClose"
			@select="handleSelect"
		>
			<template v-for="(item, index) in routes">
				<!-- 二级菜单渲染 -->
				<el-sub-menu
					v-if="!item.meta.hidden && item.children"
					:key="index"
					:index="item.path"
					class="menu-item"
				>
					<template #title>
						<el-icon><Setting /></el-icon>
						<span slot="title" :title="item.meta.name" class="long-title">{{
							item.meta.name
						}}</span>
					</template>
					<template v-for="child in item.children">
						<el-menu-item
							:index="child.path"
							:route="child"
							:key="child.path"
							v-if="!child.meta.hidden && !child.children"
							:class="{ subMenu: true }"
							:data-url="child.path"
						>
							<span slot="title" :data-url="child.path">{{ child.meta.name }}</span>
						</el-menu-item>
						<!-- 三级菜单渲染 -->
						<el-sub-menu
							:index="child.name"
							v-if="!child.meta.hidden && child.children"
							:key="child.name"
							class="menu-item"
						>
							<template slot="title">
								<span slot="title">{{ child.meta.name }}</span>
							</template>
							<el-menu-item-group>
								<template v-for="grandchild in child.children">
									<el-menu-item
										class="wearetest"
										:index="grandchild.path"
										:route="grandchild"
										:key="grandchild.path"
										v-if="!grandchild.meta.hidden"
										:class="{ subMenu: true }"
										:data-url="grandchild.path"
									>
										<span slot="title" :data-url="grandchild.path">{{
											grandchild.meta.name
										}}</span>
									</el-menu-item>
								</template>
							</el-menu-item-group>
						</el-sub-menu>
					</template>
				</el-sub-menu>
				<!-- 一级菜单渲染 -->
				<el-menu-item
					v-if="!item.meta.hidden && !item.children"
					:index="item.path"
					v-bind:key="item.path"
					:item="item"
					:route="item.path"
					class="menu-item"
					:class="{ subMenu: true }"
					:data-url="item.path"
				>
					<span slot="title" :data-url="item.path">{{ item.meta.name }}</span>
				</el-menu-item>
			</template>
		</el-menu>
	</div>
</template>

<style scoped>
.el-menu-item:hover,
.el-sub-menu__title:hover {
	background: #1d2733;
	opacity: 0.9;
}
.w-200 {
	width: 200px;
}
/* .back-primary {
	background-color: #0ba360;
	background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
}
.el-menu {
	background-color: #0ba360;
}
.el-sub-menu__title {
	background-color: #0ba360;
} */
</style>
