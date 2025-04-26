export type User = {
	id: string;
	login: string;
	password: string;
	registered_at: string;
	role_id: number;
};

export type BaseSession = {
	logOut: () => void;
};

export type AdminSession = BaseSession & {
	removeComment: () => void;
};

export type ModeratorSession = BaseSession & {
	removeComment: () => void;
};

export type ResponseResult = {
	error: string | null;
	res: BaseSession | null;
};
