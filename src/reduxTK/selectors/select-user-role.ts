import { User } from '../../bff/types';

export const selectUserRole = ({ user }: { user: User }) => user.role_id;
