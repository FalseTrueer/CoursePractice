import React from 'react';
import { Icon, Button, UserField } from '../../../../components';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ROLE } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectUserLogin,
	selectUserRole,
	selectUserSession,
} from '../../../../reduxTK/selectors';
import { logout } from '../../../../reduxTK/reducers';

const RightAligned = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const ControlPanelContainer: React.FC<{ className?: string }> = ({
	className,
}) => {
	const navigate = useNavigate();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);
	const dispatch = useDispatch();

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button width="clamp(40px, 10vw, 120px)">
						<Link to={'/login'}>Войти</Link>
					</Button>
				) : (
					<UserField>
						<div>{login}</div>
						<button onClick={() => dispatch(logout(session))}>
							<Icon id="fa-sign-out" size="clamp(12px, 2.5vw, 24px)" />
						</button>
					</UserField>
				)}
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
