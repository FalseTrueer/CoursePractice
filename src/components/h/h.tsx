import React from 'react';
import styled from 'styled-components';

interface HProps {
	children: React.ReactNode;
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	color?: string;
	fontSize?: string;
	fontWeight?: string;
	className?: string;
}

const HContainer: React.FC<HProps> = ({
	children,
	tag,
	className,
	...props
}) => {
	return React.createElement(tag, { className, ...props }, children);
};

export const H = styled(HContainer)`
	color: ${({ color = 'black' }) => color};
	font-size: ${({ fontSize = '1rem' }) => fontSize};
	font-weight: ${({ fontWeight = 'normal' }) => fontWeight};
`;
