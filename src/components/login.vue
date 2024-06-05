<script setup lang="ts">
import { h, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const username = ref("");
const password = ref("");

const login = async () => {
	const options = {
		method: "POST",
		url: "api/login",
		data: {
			username: username.value,
			password: password.value,
		},
	};
	const res = await axios(options);
	console.log(res.data);

	const options2 = {
		method: "GET",
		url: `/kickout/${username.value}`,
		headers: { token: res.data.token },
	};
	const res2 = await axios(options2);
	console.log(res2);

	const options3 = {
		method: "GET",
		url: "api/admin/api",
		headers: { token: res.data.token },
	};
	const res3 = await axios(options3);
	console.log(res3);
};
</script>

<template>
	<h1>Login</h1>
	用户名：<input type="text" v-model="username" /> 密码：<input
		type="text"
		v-model="password"
	/>
	<button @click="login">登录</button>
</template>

<style scoped></style>
