import { CreateAccount, GetAllMails, GetMeInfo } from '$lib/server/mail';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies, url }) => {
	const getReload = url.searchParams.get('reload');

	let token = '';

	const getToken = cookies.get('mail-token');

	if (!getToken || getReload) {
		console.log('😥 Working with new token .......');
		token = await CreateAccount();
		cookies.set('mail-token', token, { path: '/' });
	} else {
		console.log('👏 Working with old token .......');
		token = getToken!;
	}
	const mails = await GetAllMails(token);
	const me = await GetMeInfo(token);

	return {
		mails,
		me
	};
}) satisfies LayoutServerLoad;
