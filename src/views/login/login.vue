<script setup lang="ts">
import logo from '@/assets/login.jpg'
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Avatar, Lock } from '@element-plus/icons-vue'
import MyHeaderLanguageDrop from '@/layout/components/topHeader/MyHeaderLanguageDrop.vue'
import { makeCanvas } from '@/utils/login-background'
import { clearWaterMaskCanvas } from '@/utils/waterMask'
import { useLoginSettingStore } from '@/store/useLoginSetting'
import type { FormInstance, FormRules } from 'element-plus'

const router = useRouter()
const { setLoginSetting } = useLoginSettingStore()
const ruleFormRef = ref<FormInstance>()

const validateAccount = (rule: any, value: any, callback: any) => {
	console.log(rule)
	if (value === '') {
		callback(new Error('Please input the password'))
	} else {
		if (ruleForm.account !== '') {
			if (!ruleFormRef.value) return
			ruleFormRef.value.validateField('account', () => null)
		}
		callback()
	}
}
const validatePassword = (rule: any, value: any, callback: any) => {
	console.log(rule)
	if (value === '') {
		callback(new Error('Please input the password again'))
	} else if (value !== ruleForm.password) {
		callback(new Error("Two inputs don't match!"))
	} else {
		callback()
	}
}

const ruleForm = reactive({
	account: '',
	password: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
	account: [{ validator: validateAccount, trigger: 'blur' }],
	password: [{ validator: validatePassword, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
	setLoginSetting('token')
	router.push('/system')
	if (!formEl) return
	formEl.validate((valid: any) => {
		if (valid) {
			console.log('submit!')
		} else {
			console.log('error submit!')
			return false
		}
	})
	// router.push('/system')
}
onMounted(() => {
	// 清除水印
	clearWaterMaskCanvas()
	// 创建背景
	makeCanvas()
})
</script>

<template>
	<div class="w-full h-full relative primary-bg">
		<div class="mid login-cont">
			<img class="login-logo" :src="logo" alt="" />
			<h3 class="login-title">
				{{ $t('LOGIN_LANGUAGE_I18N.title') }}
				<MyHeaderLanguageDrop color="#f7f7f7" size="20"></MyHeaderLanguageDrop>
			</h3>
			<h5 class="login-tips">{{ $t('LOGIN_LANGUAGE_I18N.tips') }}</h5>
			<el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="login-ruleForm" size="large">
				<el-form-item prop="account">
					<el-input v-model="ruleForm.account" type="primary" autocomplete="off" :prefix-icon="Avatar" clearable>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="ruleForm.password" type="password" autocomplete="off" show-password
						:prefix-icon="Lock" />
				</el-form-item>
				<el-form-item>
					<el-button class="login-submit" type="success" @click="submitForm(ruleFormRef)">{{
						$t('LOGIN_LANGUAGE_I18N.login') }}</el-button>
				</el-form-item>
			</el-form>
			<h3 style="font-size: 18px; color: rgb(191, 203, 217)">
				Register a authenticator code
				<a href="#" style="color: lightblue" onclick="window.location.href='security/twoFactor';">here</a>
			</h3>
		</div>
		<canvas id="display" width="640" height="480"></canvas>
	</div>
</template>

<style scoped>
.primary-bg {
	/* background: var(--el-back-primary); */
	/* background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%); */
	/* background-image: linear-gradient(to right, #72afd3 0%, #37ecba 100%); */
	/* background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%); */
}

.login-cont {
	width: 420px;
	/* background: #fff; */
	padding: 25px 30px;
	border-radius: 12px;
	/* box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15), 0 0 14px 0 rgba(0, 0, 0, 0.06); */
}

.login-logo {
	display: block;
	width: 64px;
	height: 64px;
	margin: 6px auto;
}

.login-title {
	color: rgb(191, 203, 217);
	text-align: center;
	font-size: 24px;
	margin: 4px 0;
}

.login-tips {
	text-align: center;
	font-size: 12px;
	margin: 4px 0;
	color: var(--el-color-error);
}

.login-ruleForm {
	margin: 14px 0;
}

.login-submit {
	width: 100%;
}

.el-dropdown {
	color: #f7f7f7;
}
</style>
@/utils/login-mask
