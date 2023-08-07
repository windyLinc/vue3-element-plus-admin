<script setup lang="ts">
let emit = defineEmits(['MRadioGroupModel'])
const props = defineProps({
	events: {
		type: Object,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	checked: {
		type: Boolean,
		default: false,
	},
	indeterminate: {
		type: Boolean,
		default: false,
	},
	tabindex: {
		type: Number,
	},
	min: {
		type: Number,
	},
	max: {
		type: Number,
	},
	handleCheckAllChange: {
		type: Function,
	},
	isIndeterminate: {
		type: Boolean,
	},
	validateEvent: {
		type: Boolean,
	},
	// tag: {
	// 	type: String,
	// },
	model: {
		type: [String, Array],
	},
	// events: {
	// 	type: Object
	// },
	// placeholder: {
	// 	type: String,
	// },
	// options: {
	// 	type: Array,
	// },
	// className: {
	// 	type: String,
	// },
	radioGroupOptions: {
		type: Array,
	},
	// isCheckAll: {
	// 	type: Boolean,
	// },
	// checkAll: {
	// 	type: Boolean,
	// },
	// select
	// multiple: {
	// 	type: Boolean,
	// },
	// clearable: {
	// 	type: Boolean,
	// },
	// popperClass: {
	// 	type: String,
	// },
	// multipleLimit: {
	// 	type: Number
	// },
	// type: {
	// 	type: String,
	// },

	// date
	// dateType: {
	// 	type: String,
	// },
	// format: {
	// 	type: String,
	// },
	// rangeSeparator: {
	// 	type: String,
	// },
	// defaultValue: {
	// 	type: [Date, Array]
	// },
})

const MRadioGroupModel = (newValue: any) => {
	emit('MRadioGroupModel', newValue)
}
</script>
<template>
	<el-radio-group
		:modelValue="model"
		@update:modelValue="MRadioGroupModel"
		v-on="events"
		v-bind="props"
	>
		<el-radio v-for="item in radioGroupOptions" :key="item.value" :label="item.label" />
	</el-radio-group>
</template>
