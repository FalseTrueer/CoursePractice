import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from '../components';
import styled from 'styled-components';
import { Authorization } from '../pages';

const Content = styled.div`
	padding: 0 clamp(10px, 2vw, 40px);
`;

const H1 = styled.h1`
	font-size: 40px;
	text-align: center;
`;

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 20px;
	min-height: 100vh;
	width: clamp(320px, 80vw, 1000px);
	background-color: rgb(255, 255, 255);
	margin: 0 auto;
	position: relative;
`;

export const App = () => {
	return (
		<AppColumn>
			<Header />
			<Content>
				<Routes>
					<Route path="/" element={<div>Home</div>} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<div>Register</div>} />
					<Route path="/users" element={<div>Users</div>} />
					<Route path="/post/postId" element={<div>PostID</div>} />
					<Route path="/post" element={<div>New Post</div>} />
					<Route path="*" element={<div>ERROR</div>} />
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
};
