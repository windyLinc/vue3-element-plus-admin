import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import i18n from './i18n'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'virtual:svg-icons-register'

import './style.css'
import './styles/base.css'
import './styles/flex.css'
import App from './App.vue'

const app = createApp(App)
app.use(router as any)
app.use(createPinia())
app.use(i18n)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}
app.mount('#app')
console.log(app)
