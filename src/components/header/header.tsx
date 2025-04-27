import React from 'react';
import styled from 'styled-components';
import { Logo } from './components/logo/logo';

const HeaderContainer: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<header className={className}>
			<Logo />
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	height: max-content;
	padding: 20px 40px;
	box-shadow: 0 0 15px black;
	position: sticky;
	background-color: white;
	top: 0;
`;
