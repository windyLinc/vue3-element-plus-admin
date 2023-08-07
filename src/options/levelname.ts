import { ENUM_LEVEL_NAME_TYPE } from '@/enum/function'
// [{
// 	value: 'Option1',
// 	label: 'Option1',
// },]
console.log(ENUM_LEVEL_NAME_TYPE, Object.values(ENUM_LEVEL_NAME_TYPE))
const _values = Object.values(ENUM_LEVEL_NAME_TYPE)
const _keys = Object.keys(ENUM_LEVEL_NAME_TYPE)
export const levelname_options = _keys.map((item: any, index: number) => {
	let obj: any = {}
	console.log(item)
	obj.label = _values[index]
	obj.value = item
	return obj
})
