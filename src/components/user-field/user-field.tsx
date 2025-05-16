import React from 'react';
import styled from 'styled-components';

interface UserFieldProps {
	children?: React.ReactNode;
	className?: string;
}

const UserFieldContainer: React.FC<UserFieldProps> = ({
	className,
	children,
}) => {
	return <button className={className}>{children}</button>;
};

export const UserField = styled(UserFieldContainer)`
	display: flex;
	align-items: center;
	gap: 10px;
	border-radius: 5px;
	font-size: clamp(10px, 2vw, 18px);
	font-weight: 600;
`;
