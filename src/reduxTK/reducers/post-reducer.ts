import { createSlice } from '@reduxjs/toolkit';

const initialPostState = {
	title: '',
	body: '',
};

const postSlice = createSlice({
	name: 'post',
	initialState: initialPostState,
	reducers: {},
});

export const postReducer = postSlice.reducer;
