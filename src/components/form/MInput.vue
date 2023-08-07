<script setup lang="ts">
let emit = defineEmits(['mInputModel'])
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
	disabled: {
		type: Boolean,
		default: false,
	},
	clearable: {
		type: Boolean,
		default: true,
	},
	maxlength: {
		type: Number,
	},
	minlength: {
		type: Number,
	},
	prefixIcon: {
		type: String,
	},
	suffixIcon: {
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
})
// const updatedModel = computed(() => props.model)
const mInputModel = (newValue: any) => {
	emit('mInputModel', newValue)
}
</script>
<template>
	<el-input
		v-bind="props"
		:modelValue="model"
		@update:modelValue="mInputModel"
		v-on="events"
		:placeholder="$t(props.placeholder)"
	/>
</template>
<style scoped></style>
