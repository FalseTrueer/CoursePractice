import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components';

const LargeText = styled.p`
	font-size: clamp(20px, 3vw, 48px);
	font-weight: 600;
	line-height: clamp(20px, 3vw, 48px);
`;

const SmallText = styled.p`
	font-size: clamp(10px, 2vw, 18px);
	font-weight: 600;
`;

const LogoContainer: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<div className={className}>
			<Icon id="fa-code" size="clamp(20px, 7vw, 70px)" margin="0 10px 0 0" />
			<div>
				<LargeText>Блог</LargeText>
				<SmallText>веб-разработчика</SmallText>
			</div>
		</div>
	);
};

export const Logo = styled(LogoContainer)`
	display: flex;
	align-items: center;
`;
