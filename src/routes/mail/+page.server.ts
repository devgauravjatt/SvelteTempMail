import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ url, parent }) => {
	const id = url.searchParams.get('id');
	if (!id) {
		return error(404, {
			message: 'id not found'
		});
	}
	const data = await parent();

	const mail = data.mails.find((mail) => mail.id === id);

	if (!mail) {
		return error(404, {
			message: 'id not found'
		});
	}
	return {
		mail
	};
}) satisfies PageServerLoad;
