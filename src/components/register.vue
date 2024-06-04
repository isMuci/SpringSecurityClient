<script setup lang="ts">
import { h, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const username = ref("");
const password = ref("");

const register = async () => {
	const options = {
		method: "POST",
		url: "api/register",
		data: {
			username: username.value,
			password: password.value,
		},
	};
	const res = await axios(options);
	console.log(res.data);
};
</script>

<template>
	<h1>Register</h1>
	用户名：<input type="text" v-model="username" /> 密码：<input
		type="text"
		v-model="password"
	/>
	<button @click="register">注册</button>
</template>

<style scoped></style>
