export const load = ({ cookies }) => ({ token: cookies.get("token") ?? null });
