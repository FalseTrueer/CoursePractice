import { User } from '../../bff/types';

export const selectUserSession = ({ user }: { user: User }) => user.session;
