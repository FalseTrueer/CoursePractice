import { configureStore } from '@reduxjs/toolkit';
import {
	userReducer,
	usersReducer,
	postReducer,
	postsReducer,
} from './reducers';

const store = configureStore({
	reducer: {
		user: userReducer,
		users: usersReducer,
		post: postReducer,
		posts: postsReducer,
	},
});

export default store;
