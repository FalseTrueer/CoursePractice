import { User } from '../../bff/types';

export const selectUserLogin = ({ user }: { user: User }) => user.login;
