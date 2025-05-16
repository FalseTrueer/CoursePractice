import { createSlice } from '@reduxjs/toolkit';
import { ROLE } from '../../constants';
import { server } from '../../bff';

const initialUserState = {
	session: null,
	user: null,
	id: null,
	login: null,
	role_id: ROLE.GUEST,
};

const userSlice = createSlice({
	name: 'user',
	initialState: initialUserState,
	reducers: {
		setUser(state, action) {
			return { ...state, ...action.payload };
		},
		logout(state, action) {
			server.logout(action.payload);
			return initialUserState;
		},
	},
});

export const { setUser, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
