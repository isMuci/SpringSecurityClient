<script setup lang="ts">
import { h, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import qs from "qs";

const router = useRouter();
const username = ref("");
const password = ref("");

const login = async () => {
	const options = {
		method: "POST",
		url: "api/login",
		data: qs.stringify({
			username: username.value,
			password: password.value,
		}),
	};
	const res = await axios(options);
	console.log(res.data);

	// const options2 = {
	// 	method: "GET",
	// 	url: `/kickout/${username.value}`,
	// 	headers: { token: res.data.token },
	// };
	// const res2 = await axios(options2);
	// console.log(res2);

	const options3 = {
		method: "GET",
		url: "api/admin/api",
		headers: { Authorization: `Bearer ${res.data}` },
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
	<a href="https://gitee.com/oauth/authorize?client_id=9cecc02909cd71cc217c41fe5635755720544c385e352e698a38ff145318c169&redirect_uri=http://localhost:8080/oauth/notify&response_type=code">gitee</a>
</template>

<style scoped></style>
