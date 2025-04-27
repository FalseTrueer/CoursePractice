import React from 'react';
import styled from 'styled-components';

interface IconProps {
	className?: string;
	id: string;
	size?: string;
	margin?: string;
}

const IconContainer: React.FC<IconProps> = ({ className, id }) => {
	return (
		<div className={className}>
			<i className={`fa ${id}`} aria-hidden="true" />
		</div>
	);
};

export const Icon = styled(IconContainer)<IconProps>`
	font-size: ${({ size = '20px' }) => size};
	margin: ${({ margin = '0' }) => margin};
`;
