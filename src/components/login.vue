<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const username = ref("");
const password = ref("");

const login = () => {
	const options = {
		method: "POST",
		url: "api/login",
		data: {
			username: username.value,
			password: password.value,
		},
		headers: {
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
		},
	};
	axios(options).then((res) => {
		console.log(res);
		if (res.data === "loginOK") {
			router.push("/");
		} else {
			alert("用户名或密码错误");
		}
	});
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
