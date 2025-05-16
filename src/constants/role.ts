export const ROLE = {
	ADMIN: 0,
	MODERATOR: 1,
	USER: 2,
	GUEST: 3,
};

export type Role = (typeof ROLE)[keyof typeof ROLE];
