import { User } from './types';

export const getUsers = (): Promise<User[]> =>
	fetch('http://localhost:3001/users').then((res) => res.json());
