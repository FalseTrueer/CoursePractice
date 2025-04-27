import React from 'react';
import { Icon } from '../../../../components';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
	font-size: clamp(12px, 3vw, 18px);
	width: clamp(40px, 10vw, 120px);
	height: max-content;
	border-radius: 5px;
	border: 1px solid black;
	padding: 3px;
	text-align: center;
`;

const RightAligned = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const ControlPanelContainer: React.FC<{ className?: string }> = ({
	className,
}) => {
	const navigate = useNavigate();
	return (
		<div className={className}>
			<RightAligned>
				<StyledLink to={'/login'}>Войти</StyledLink>
			</RightAligned>
			<RightAligned>
				<button onClick={() => navigate(-1)}>
					<Icon
						id="fa-backward"
						size="clamp(12px, 2.5vw, 24px)"
						margin="10px 0 0 0"
					/>
				</button>
				<Link to={'/post'}>
					<Icon
						id="fa-file-text-o"
						size="clamp(12px, 2.5vw, 24px)"
						margin="10px 0 0 16px"
					/>
				</Link>
				<Link to={'/users'}>
					<Icon
						id="fa-users"
						size="clamp(12px, 2.5vw, 24px)"
						margin="10px 0 0 16px"
					/>
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
