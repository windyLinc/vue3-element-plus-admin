<script setup lang="ts">
// import { emit } from 'vue'
// let emit = defineEmits(['updateModel'])
const props = defineProps({
	classify: {
		type: String,
	},
	label: {
		type: String,
		default: '',
	},
	rules: {
		type: Object,
	},
	required: {
		type: Boolean,
		default: false,
	},
	prop: {
		type: [String, Array],
	},
	// type: {
	// 	type: String,
	// },
	// tag: {
	// 	type: String,
	// },
	// model: {
	// 	type: [String, Array],
	// },
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
	// checkbox
	// handleCheckAllChange: {
	// 	type: Function,
	// },
	// checkboxOptions: {
	// 	type: Array,
	// },
	// isIndeterminate: {
	// 	type: Boolean,
	// },
	// checked: {
	// 	type: Boolean,
	// },
	// validateEvent: {
	// 	type: Boolean,
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
// const updateModel = (newValue: any) => {
// 	emit('updateModel', newValue)
// }
// const MInputEmit =  (newValue: any) => {
// 	emit('MInputEmit', newValue)
// }
</script>
<template>
	<!-- eslint-disable-next-line vue/no-v-for-template-key -->
	<!-- <template v-for="item in list" :key="item + 'el-form-item'"> -->
	<el-form-item v-bind="props" :label="$t(props.label)">
		<slot></slot>
		<!-- <button v-on="{ mousedown: doThis, mouseup: doThat }"></button> -->
		<!-- 使用缩写的动态事件 -->
		<!-- <button @[event]="doThis"></button> -->
		<!-- <component :is="tag" :modelValue="model"  @update:modelValue="updateModel"   v-on="events" ></component> -->
		<!-- <template v-if="classify === 'input'"> -->
		<!-- <el-input :modelValue="model"  @update:modelValue="updateModel" v-on="events" v-bind="props" /> -->
		<!-- </template> -->
		<!-- <template v-if="classify === 'textarea'">
				<el-input  :modelValue="model"  @update:modelValue="updateModel" type="textarea" v-on="events" v-bind="props" />
			</template>
			<template v-if="classify === 'select'">
				<el-select  v-bind="props" :modelValue="model"  @update:modelValue="updateModel"  v-on="events">
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value"
					/>
				</el-select>
			</template>
			<template v-if="classify === 'date'">
				<el-date-picker v-bind="props" :type="dateType" :modelValue="model"  @update:modelValue="updateModel"  v-on="events" type="date" />
			</template>
			<template v-if="classify === 'time'">
				<el-time-picker :modelValue="model"  @update:modelValue="updateModel" v-on="events" v-bind="props" />
			</template>
			<template v-if="classify === 'datetime'">
				<el-date-picker :modelValue="model"  @update:modelValue="updateModel" type="time" v-on="events" v-bind="props" />
			</template>
			<template  v-if="classify === 'checkboxGroup'">
				<el-checkbox
					v-if="isCheckAll"
					:modelValue="checkAll"
					@update:modelValue="updateCheckAllModel"
					@change="handleCheckAllChange"
					>Check all</el-checkbox
				>
				<el-checkbox-group :modelValue="model"  @update:modelValue="updateModel" v-on="events" v-bind="props">
					<el-checkbox
						v-for="item in checkboxOptions"
						:key="item.value"
						:label="item.label"
						:value="item.value"
						:disabled="item.disabled"
					/>
				</el-checkbox-group>
			</template>
			<template v-if="classify === 'switch'">
				<el-switch  :modelValue="model"  @update:modelValue="updateModel" />
			</template>
			<template v-if="classify === 'radioGroup'">
				<el-radio-group  :modelValue="model"  @update:modelValue="updateModel"   v-on="events" v-bind="props">
					<el-radio
						v-for="item in radioGroupOptions"
						:key="item.value"
						:label="item.label" />
				</el-radio-group>
			</template>
			<template v-if="classify === 'radioButtonGroup'">
				<el-radio-group  :modelValue="model"  @update:modelValue="updateModel"   v-on="events" v-bind="props">
					<el-radio-button
						v-for="item in radioGroupOptions"
						:key="item.value"
						:label="item.label" />
				</el-radio-group>
			</template> -->
	</el-form-item>
</template>
<style scoped>
.el-form--inline .el-form-item {
	vertical-align: baseline;
}
</style>
