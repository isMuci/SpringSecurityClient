import { createRouter, createWebHashHistory } from "vue-router";

import index from "./components/index.vue";
import login from "./components/login.vue";
import register from "./components/register.vue";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			name: "index",
			component: index,
		},
		{
			path: "/login",
			name: "login",
			component: login,
		},
		{
			path: "/register",
			name: "register",
			component: register,
		},
	],
});

export default router;
