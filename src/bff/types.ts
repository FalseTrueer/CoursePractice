import { Role } from '../constants';

export type User = {
	session: string;
	id: string;
	login: string;
	password: string;
	registered_at: string;
	role_id: Role;
};

export interface BaseSession {
	logout: () => void;
	user: User;
}

export interface UserSession extends BaseSession {
	viewProfile: () => void;
	editOwnProfile: () => void;
}

export interface ModeratorSession extends BaseSession {
	removeComment: () => void;
	banUser: () => void;
}

export interface AdminSession extends ModeratorSession {
	deleteUser: () => void;
	grantRole: (userId: string, role: Role) => void;
}

export type UserRoleSession = UserSession | ModeratorSession | AdminSession;

export type AuthenticatedUser = {
	id: string;
	login: string;
	role_id: Role;
	session: UserRoleSession | string;
};

export type AuthResult = {
	error: string | null;
	res: AuthenticatedUser | null;
};
