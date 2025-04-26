import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
	text-align: center;
`;

export const App = () => {
	return (
		<>
			<Div>
				<i className="fa fa-camera-retro fa-spin"></i>
			</Div>
			<div>hello1</div>
			<Div>hello2</Div>
		</>
	);
};
