import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const lifecycle = process.env.npm_lifecycle_event

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		sourcemap: true,
		// sourcemap: process.env.BUILD_ENV === 'DEV' ? true : false,
		// minify: process.env.BUILD_ENV === 'DEV' ? false : 'esbuild',
		// brotliSize: false,
		rollupOptions: {
			output: {
				manualChunks: {
					vue: ['vue', 'vue-router'],
					// axios: ['axios'], 0.1kb
				},
			},
		},
		minify: 'terser',
	},
	plugins: [
		vue(),
		AutoImport({
			resolvers: [
				IconsResolver({
					prefix: 'Icon',
				}),
				ElementPlusResolver(),
			],
			dts: resolve(resolve(__dirname, 'src'), 'auto-imports.d.ts'),
		}),
		Components({
			resolvers: [
				IconsResolver({
					enabledCollections: ['ep'],
				}),
				ElementPlusResolver(),
			],
			dts: resolve(resolve(__dirname, 'src'), 'auto-imports.d.ts'),
		}),
		createSvgIconsPlugin({
			iconDirs: [resolve(__dirname, './src/assets/svg')], // svg的文件路径
			// 指定symbolId格式（这里的配置与6.2步骤中的引入svg组件的name配置项写法有关）
			symbolId: 'icon-[dir]-[name]',
		}),
		Icons({
			autoInstall: true,
		}),
		// gzip 压缩
		viteCompression({
			verbose: true,
			disable: false,
			threshold: 10240,
			algorithm: 'gzip',
			ext: '.gz',
		}),
		// brotli
		viteCompression({
			verbose: true,
			disable: false,
			threshold: 10240,
			algorithm: 'brotliCompress',
			ext: '.br',
		}),
		// 打包分析
		lifecycle === 'report'
			? visualizer({ open: true, brotliSize: true, filename: 'report.html' })
			: null,
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
		},
	},

	server: {
		// host: 'ad.example.com',
		cors: true,
		proxy: {
			'/api': {
				target: 'https://test.example.com',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			},
		},
	},
})
