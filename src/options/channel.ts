import { ENUM_CHANNEL_TYPE } from '@/enum/function'
// [{
// 	value: 'Option1',
// 	label: 'Option1',
// },]
// console.log(Object.values(ENUM_CHANNEL_TYPE))
export const channel_options = Object.values(ENUM_CHANNEL_TYPE).map((item: any) => {
	let obj: any = {}
	obj.label = item
	obj.value = item
	return obj
})
