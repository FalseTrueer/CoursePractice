import { User, AdminSession, ModeratorSession, ResponseResult } from './types';
import { removeComment } from './session/removeComment';
import { ROLE } from '../constants/role';

export const createSession = (roleId: number) => {
	let session: Partial<AdminSession & ModeratorSession> = {
		logOut() {
			Object.keys(session).forEach((key) => delete (session as any)[key]);
		},
	};

	switch (roleId) {
		case ROLE.ADMIN:
			session.removeComment = removeComment;
			break;
		case ROLE.MODERATOR:
			session.removeComment = removeComment;
			break;
		case ROLE.USER:
			break;
		default:
		// В случае ошибки ничего не делать
	}

	return session as AdminSession | ModeratorSession;
};
