<script setup lang="ts">
let emit = defineEmits(['mDateTimeModel'])
const props = defineProps({
	type: {
		type: String,
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
})
// const updatedModel = computed(() => props.model)
const mDateTimeModel = (newValue: any) => {
	emit('mDateTimeModel', newValue)
}
</script>
<template>
	<el-date-picker
		:modelValue="model"
		@update:modelValue="mDateTimeModel"
		type="datetime"
		v-on="events"
		v-bind="props"
		:placeholder="$t(props.placeholder)"
	/>
</template>
<style scoped></style>
