import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { GetOneMail } from '$lib/server/mail';

export const load = (async ({ url, cookies }) => {
	const getToken = cookies.get('mail-token') || '';
	const id = url.searchParams.get('id');
	if (!id) {
		return error(404, {
			message: 'id not found'
		});
	}
	const mail = await GetOneMail(getToken, id);

	if (!mail) {
		return error(404, {
			message: 'id not found'
		});
	}
	return {
		mail
	};
}) satisfies PageServerLoad;
