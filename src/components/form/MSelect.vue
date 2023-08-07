<script setup lang="ts">
let emit = defineEmits(['mSelectModel'])
const props = defineProps({
	type: {
		type: String,
	},
	options: {
		type: Array,
	},
	model: {
		type: [String, Array],
	},
	events: {
		type: Object,
	},
	placeholder: {
		type: String,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	clearable: {
		type: Boolean,
		default: true,
	},
	multiple: {
		type: Boolean,
		default: false,
	},
	multipleLimit: {
		type: Number,
	},
	filterable: {
		type: Boolean,
		default: false,
	},
	filterMethod: {
		type: Function,
	},
	noMatchText: {
		type: String,
		default: 'No matching data',
	},
	noDataText: {
		type: String,
		default: 'No data',
	},
	popperClass: {
		type: String,
	},
	readonly: {
		type: Boolean,
		default: false,
	},
	tabindex: {
		type: Number,
	},
	validateEvent: {
		type: Boolean,
		default: true,
	},
	inputStyle: {
		type: Object,
	},
	// select
})
// const updatedModel = computed(() => props.model)
const mSelectModel = (newValue: any) => {
	emit('mSelectModel', newValue)
}
</script>
<template>
	<el-select
		v-bind="props"
		:modelValue="model"
		@update:modelValue="mSelectModel"
		v-on="events"
		:placeholder="$t(placeholder)"
	>
		<el-option
			v-for="item in options"
			:key="item.value"
			:label="item.label"
			:value="item.value"
		/>
	</el-select>
</template>
<style scoped></style>
