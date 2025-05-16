import React, { forwardRef } from 'react';
import styled from 'styled-components';

interface InputProps {
	className?: string;
	placeholder?: string;
	type?: string;
	width?: string;
	ref: React.Ref<HTMLInputElement>;
}

const InputContainer: React.FC<InputProps> = forwardRef(
	({ className, width, ...props }, ref) => {
		return <input className={className} {...props} ref={ref} />;
	}
);

export const Input = styled(InputContainer)`
	height: 40px;
	width: ${({ width = '100%' }) => width};
	margin: 0 0 10px 0;
	border-radius: 5px;
	border: 1px solid black;
	padding: 10px;
`;
