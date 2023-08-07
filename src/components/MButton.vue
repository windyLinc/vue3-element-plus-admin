<script setup lang="ts">
let emit = defineEmits(['MButtonModel'])
const props = defineProps({
	type: {
		type: String,
	},
	innerText: {
		type: String,
	},
	model: {
		type: [String, Array],
	},
	plain: {
		type: Boolean,
	},
	text: {
		type: Boolean,
	},
	round: {
		type: Boolean,
		default: true,
	},
	circle: {
		type: Boolean,
	},
	loading: {
		type: Boolean,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	color: {
		type: String,
	},
	events: {
		type: Object,
	},
})
// const updatedModel = computed(() => props.model)
const MButtonModel = (newValue: any) => {
	emit('MButtonModel', newValue)
}
</script>
<template>
	<el-button
		:modelValue="model"
		@update:modelValue="MButtonModel"
		v-on="events"
		v-bind="props"
		style="padding: 4px 20px"
		v-text="$t(innerText)"
	></el-button>
</template>
<style scoped></style>
