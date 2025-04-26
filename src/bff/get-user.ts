import { getUsers } from './get-users';
import { User } from './types';

export const getUser = async (loginToFind: string): Promise<User | null> => {
	const users = await getUsers();
	return users.find((u) => u.login === loginToFind) || null;
};
