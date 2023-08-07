<script setup lang="ts">
let emit = defineEmits(['MCheckboxGroupModel'])
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
	checkboxOptions: {
		type: Array,
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
	// radioGroupOptions: {
	// 	type: Array,
	// },
	isCheckAll: {
		type: Boolean,
	},
	checkAll: {
		type: Boolean,
	},
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

// const updatedModel = computed(() => props.model)
const updateCheckAllModel = (newValue: any) => {
	emit('updateCheckAllModel', newValue)
}
const updateMCheckboxGroupModel = (newValue: any) => {
	emit('updateMCheckboxGroupModel', newValue)
}
</script>
<template>
	<!-- <el-checkbox v-if="isCheckAll" :modelValue="checkAll" @update:modelValue="updateCheckAllModel"
		@change="handleCheckAllChange">Check all</el-checkbox> -->
	<el-checkbox-group
		:modelValue="model"
		@update:modelValue="updateMCheckboxGroupModel"
		v-on="events"
		v-bind="props"
	>
		<el-checkbox
			v-for="item in checkboxOptions"
			:key="item.value"
			:label="item.label"
			:value="item.value"
			:disabled="item.disabled"
			:style="style"
		/>
	</el-checkbox-group>
</template>
