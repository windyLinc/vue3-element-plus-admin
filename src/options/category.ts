import { ENUM_LEVEL_CLASSIFY_TYPE } from '@/enum/function'
// [{
// 	value: 'Option1',
// 	label: 'Option1',
// },]
console.log(ENUM_LEVEL_CLASSIFY_TYPE, Object.values(ENUM_LEVEL_CLASSIFY_TYPE))
const _arr = Object.values(ENUM_LEVEL_CLASSIFY_TYPE).slice(
	0,
	Object.values(ENUM_LEVEL_CLASSIFY_TYPE).length / 2,
)
export const category_options = _arr.map((item: any, index: number) => {
	let obj: any = {}
	console.log(item)
	obj.label = item.toLowerCase()
	obj.value = index + 1
	return obj
})
