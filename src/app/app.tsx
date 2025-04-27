import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
	padding: clamp(20px, 5vw, 120px) 0;
`;

const H1 = styled.h1`
	font-size: 40px;
	text-align: center;
`;

const Header = () => {
	return (
		<div>
			<h1>Header</h1>
		</div>
	);
};

const Footer = () => {
	return (
		<div>
			<p>Footer</p>
		</div>
	);
};

export const App = () => {
	return (
		<>
			<Header />
			<Content>
				<i className="fa fa-camera-retro fa-spin"></i>
				<H1>Content</H1>
				<Routes>
					<Route path="/" element={<div>Home</div>} />
					<Route path="/login" element={<div>Login</div>} />
					<Route path="/register" element={<div>Register</div>} />
					<Route path="/users" element={<div>Users</div>} />
					<Route path="/post/postId" element={<div>PostID</div>} />
					<Route path="/post" element={<div>New Post</div>} />
					<Route path="*" element={<div>ERROR</div>} />
				</Routes>
			</Content>
			<Footer />
		</>
	);
};
