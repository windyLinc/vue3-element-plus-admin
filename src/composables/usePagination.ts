// mouse.js
import { ref, reactive, toRef } from 'vue'
import { PAGINATION_SETTINGS, PaginationOptions } from '@/config/pages'

// 按照惯例，组合式函数名以“use”开头
export function useMouse() {
	// 被组合式函数封装和管理的状态
	const x = ref(0)
	const y = ref(0)

	// 组合式函数可以随时更改其状态。
	function update(event: any) {
		x.value = event.pageX
		y.value = event.pageY
	}

	// 通过返回值暴露所管理的状态
	return { x, y }
}
// export function usePagination(emit: any, options: PaginationOptions = PAGINATION_SETTINGS) {
export function usePagination(emit: any, pagination: any) {
	// const PAGINATION = reactive(options)
	// const pagination = toRef(PAGINATION)
	const handleSizeChange = (val: number) => {
		pagination.pageSize = val
		emit('pageChange', pagination)
		console.log(`${val} ${pagination.pageSize} items per page`)
	}
	const handleCurrentChange = (val: number) => {
		pagination.pageNo = val
		emit('pageChange', pagination)
		console.log(`current page: ${val} ${pagination.pageNo}`)
	}
	const handlePrevChange = () => {
		emit('pageChange', pagination)
		// pagination.pageNo -= 1
		console.log(`${pagination.pageNo} items per handlePrevChange`)
	}
	const handleNextChange = () => {
		emit('pageChange', pagination)
		// pagination.pageNo += 1
		console.log(`current page: ${pagination.pageNo}`)
	}
	return {
		pagination,
		handleSizeChange,
		handleCurrentChange,
		handlePrevChange,
		handleNextChange,
	}
}
