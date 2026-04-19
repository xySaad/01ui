const devAcc = {
	login: 'a1',
	pass: 'XGjFJU6z!LZ*ke2'
};

const b64 = btoa(`${devAcc.login}:${devAcc.pass}`);

export let JWT: string;

export const LoadJWT = async () => {
	if (JWT) return JWT;
	const resp = await fetch('https://learn.zone01oujda.ma/api/auth/signin', {
		method: 'POST',
		headers: { Authorization: `Basic ${b64}` }
	});

	if (!resp.ok) {
		const json = await resp.json();
		throw new Error(json.error);
	}
	JWT = await resp.json();
	return JWT;
};
