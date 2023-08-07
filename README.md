# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


## 一、项目相关
- vue@3
- pinia
- pnpm
- vite
- element-plus
- nodejs@16.15.0
- typescript

## 二、浏览器运行版本
- Edge ≥ 79
- Firefox ≥ 78
- Chrome ≥ 64
- Safari ≥ 12

## 三、代码规范
- volar
- eslint
- prettier
- stylelint, 未使用、版本兼容过于麻烦

## 四、代码提交
- husky
- lint-staged
- conventional-changelog
- commitlint

## 五、CSS样式规范
- UI框架采用element-plus
- 不建议采用less\sass等，采用CSSNext来定义CSS变量
- 如果涉及自定义样式的情况：建议采用原子化CSS，定义基础类样式、在元素上添加类名

## 六、文件夹介绍
- .husky
- docs, 文档、主要是多语言excel文件
- src
	- assets, 静态资源
	- components, 全局组件
	- composables, 组合式函数
	- config, 全局配置
	- docs, 文档
	- enum, 全局定义枚举
	- i18n, 多语言
	- layout, 布局
	- lib, 外部库
	- plugins, 插件
	- request, API请求
	- router, 路由
	- slots, 插槽
	- store, 全局状态管理
	- styles, CSS文件
	- types, ts自定义类型、接口
	- utils, 自定义ts方法
	- view, 路由视图
