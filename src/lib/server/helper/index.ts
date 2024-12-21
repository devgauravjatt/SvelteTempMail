import { faker } from '@faker-js/faker';

export const getDummyUser = () => {
	const userInfo = {
		username: faker.internet.username(),
		password: faker.internet.password()
	};
	return userInfo;
};
