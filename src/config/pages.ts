export interface PaginationOptions {
	limit: number
	// pageSize: number
	pageSizes: number[]
	layout: string
	offset: number
	// pageNo: number
	total: number
	isHide: boolean
}
export const PAGINATION_SETTINGS = {
	isHide: false,
	// pageSize: 10,
	limit: 10,
	pageSizes: [10, 50, 100, 200, 300, 400],
	layout: 'total, sizes, prev, pager, next, jumper',
	// pageNo: 1,
	offset: 1,
	total: 100,
}
