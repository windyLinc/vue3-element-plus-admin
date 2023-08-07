<script setup lang="ts">
let emit = defineEmits(['MDateTimeRangeModel'])
const props = defineProps({
	type: {
		type: String,
		validator(val: string) {
			return ['datetimerange', 'daterange'].includes(val)
		},
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
	readonly: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	editable: {
		type: Boolean,
		default: true,
	},
	clearable: {
		type: Boolean,
		default: true,
	},
	format: {
		type: String,
		default: 'YYYY-MM-DD HH:mm:ss',
	},
	popperClass: {
		type: String,
	},
	shortcuts: {
		type: Array,
	},
	startPlaceholder: {
		type: String,
	},
	endPlaceholder: {
		type: String,
	},
	rangeSeparator: {
		type: String,
	},
})
// const updatedModel = computed(() => props.model)
const MDateTimeRangeModel = (newValue: any) => {
	emit('MDateTimeRangeModel', newValue)
}
</script>
<template>
	<el-date-picker
		:modelValue="model"
		@update:modelValue="MDateTimeRangeModel"
		type="datetime"
		v-on="events"
		v-bind="props"
		:placeholder="$t(props.placeholder)"
	/>
</template>
<style scoped></style>
