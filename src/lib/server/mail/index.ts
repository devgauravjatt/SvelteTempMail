import axios from 'axios';
import type { ApiResponse } from '../../../app';
import { getDummyUser } from '../helper';

export const CreateAccount = async () => {
	const { data }: { data: ApiResponse['DomainsList'] } = await axios.get(
		'https://api.mail.tm/domains'
	);

	const domain = data['hydra:member'][0].domain;

	const user = getDummyUser();

	const accountData = (await axios.post('https://api.mail.tm/accounts', {
		address: user.username + '@' + domain,
		password: user.password
	})) as { data: ApiResponse['AccountsCreate'] };

	const tokenData = (await axios.post('https://api.mail.tm/token', {
		address: accountData.data.address,
		password: user.password
	})) as { data: ApiResponse['TokenCreate'] };

	return tokenData.data.token;
};

export const GetAllMails = async (token: string) => {
	const { data }: { data: ApiResponse['MailList'] } = await axios.get(
		'https://api.mail.tm/messages',
		{ headers: { Authorization: 'Bearer ' + token } }
	);
	const mails = data['hydra:member'];
	return mails.slice(0, 10);
};

export const GetMeInfo = async (token: string) => {
	const { data }: { data: ApiResponse['MeInfo'] } = await axios.get('https://api.mail.tm/me', {
		headers: { Authorization: 'Bearer ' + token }
	});
	const mail = data.address;
	return mail;
};
