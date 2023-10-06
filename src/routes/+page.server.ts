import type { Actions } from "@sveltejs/kit";
import register from "$lib/api/register";
import login from "$lib/api/login";
import type { HyperDisplay } from "$lib/types";

export const actions: Actions = {
	register: async ({ request, cookies }) => {
		const formData = await request.formData();
		const username = formData.get("username");
		const password = formData.get("password");

		if (!username || !password) return;

		const token = await register(username.toString(), password.toString());

		if (!token) return;

		cookies.set("token", token, { maxAge: 60 * 60 * 24 * 30 });
		return { username: username.toString(), hypers: [] as HyperDisplay[] };
	},
	login: async ({ request, cookies }) => {
		const formData = await request.formData();
		const username = formData.get("username");
		const password = formData.get("password");

		if (!username || !password) return;

		const data = await login(username.toString(), password.toString());

		if (!data) return;

		cookies.set("token", data.token, { maxAge: 60 * 60 * 24 * 30 });
		return { username: username.toString(), hypers: data.hypers };
	}
};
