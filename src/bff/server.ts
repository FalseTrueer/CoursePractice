import { AuthResult } from './types';
import { getUser } from './get-user';
import { addUser } from './add-user';
import { createSession } from './create-session';
import { ROLE } from '../constants';
import { sessions } from './sessions';

export const server = {
	async authorize(
		authLogin: string,
		authPassword: string
	): Promise<AuthResult> {
		const user = await getUser(authLogin);

		if (!user) {
			return { error: 'Такого пользователя не существует', res: null };
		}

		if (user.password !== authPassword) {
			return { error: 'Неверный пароль', res: null };
		}

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				role_id: user.role_id,
				session: sessions.create(user),
			},
		};
	},

	async register(regLogin: string, regPassword: string): Promise<AuthResult> {
		const user = await getUser(regLogin);

		if (user) {
			return { error: 'Такой логин уже занят', res: null };
		}

		const res = await addUser(regLogin, regPassword);
		if (!res.ok) {
			return { error: 'Ошибка регистрации', res: null };
		}

		const newUser = await res.json();
		const role_id = ROLE.USER;
		const session = createSession(role_id);

		return {
			error: null,
			res: {
				id: newUser.id,
				login: regLogin,
				role_id,
				session,
			},
		};
	},

	async logout(session: string) {
		sessions.remove(session);
	},
};
