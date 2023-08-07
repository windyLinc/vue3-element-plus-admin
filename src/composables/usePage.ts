// mouse.js
import { ref, reactive, toRef } from 'vue'
import { PAGINATION_SETTINGS, PaginationOptions } from '@/config/pages'

export function usePage(options: PaginationOptions = PAGINATION_SETTINGS) {
	const PAGINATION = reactive(options)
	const pagination = toRef(PAGINATION)
	const total = ref<number>(1)
	function pageSlotChange(val: any, param: any, cb: Function) {
		// pagination.value = val
		pagination.value.offset = val.pageNo
		pagination.value.limit = val.pageSize
		console.log(val, val.value, pagination, 'slotPageChange')
		return cb({
			offset: pagination.value.offset,
			limit: pagination.value.limit,
			...param,
		})
	}
	return {
		pagination,
		total,
		pageSlotChange,
	}
}
