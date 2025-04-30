import React from 'react';
import styled from 'styled-components';
import { ControlPanel, Logo } from './components';

const Discription = styled.div`
	font-style: italic;
	font-size: clamp(10px, 2vw, 18px);
`;

interface HeaderProps {
	className?: string;
}

const HeaderContainer: React.FC<HeaderProps> = ({ className }) => {
	return (
		<header className={className}>
			<Logo />
			<Discription>
				Веб-технологии
				<br />
				Написание кода
				<br />
				Разбор ошибок <br />
			</Discription>
			<ControlPanel />
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
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 15px;
`;
