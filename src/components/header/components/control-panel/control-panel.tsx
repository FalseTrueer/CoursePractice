import React from 'react';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const Button = styled.button`
	font-size: clamp(12px, 3vw, 18px);
	width: clamp(40px, 10vw, 120px);
	height: 32px;
	border-radius: 5px;
	border: 1px solid black;
	padding: 3px;
`;

const RightAligned = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const ControlPanelContainer: React.FC<{ className?: string }> = ({
	className,
}) => {
	return (
		<div className={className}>
			<RightAligned>
				<Button>Войти</Button>
			</RightAligned>
			<RightAligned>
				<Icon
					id="fa-backward"
					size="clamp(12px, 3vw, 24px)"
					margin="10px 0 0 0"
				/>
				<Icon
					id="fa-file-text-o"
					size="clamp(12px, 3vw, 24px)"
					margin="10px 0 0 16px"
				/>
				<Icon
					id="fa-users"
					size="clamp(12px, 3vw, 24px)"
					margin="10px 0 0 16px"
				/>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
