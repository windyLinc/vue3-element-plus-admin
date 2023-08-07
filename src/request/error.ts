import { h } from 'vue'
// import { ElMessage } from 'element-plus'

export const error_callback = (err: Error, msg: string) => {
	// eslint-disable-next-line no-undef
	ElMessage({
		message: h('p', null, [
			h('span', null, 'err.message'),
			h('i', { style: 'color: teal' }, 'msg'),
		]),
		type: 'error',
	})
}
