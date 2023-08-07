import { ENUM_CUSTOMER_TYPE } from '@/enum/function'
// [{
// 	value: 'Option1',
// 	label: 'Option1',
// },]
// console.log(Object.values(ENUM_CUSTOMER_TYPE))
export const userCatogery_options = Object.values(ENUM_CUSTOMER_TYPE).map((item: any) => {
	let obj: any = {}
	obj.label = item
	obj.value = item
	return obj
})
