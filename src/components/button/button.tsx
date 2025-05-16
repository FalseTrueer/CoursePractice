import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
	children: React.ReactNode;
	className?: string;
	width?: string;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	backgroundColor?: string;
	fontSize?: string;
}

const ButtonContainer: React.FC<ButtonProps> = ({
	children,
	className,
	width,
	backgroundColor,
	...props
}) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	font-size: clamp(12px, 3vw, 18px);
	width: ${({ width = '100%' }) => width};
	background-color: ${({ backgroundColor = 'inherit' }) => backgroundColor};
	font-size: ${({ fontSize = '1rem' }) => fontSize};
	height: max-content;
	border-radius: 5px;
	border: 1px solid black;
	padding: 3px;
	text-align: center;
`;
