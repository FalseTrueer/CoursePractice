import React from 'react';
import styled from 'styled-components';

const IconContainer: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<div className={className}>
			<i className="fa fa-code" aria-hidden="true" />
		</div>
	);
};

const Icon = styled(IconContainer)`
	font-size: clamp(40px, 8vw, 70px);
	margin-right: 10px;
`;

const LargeText = styled.p`
	font-size: clamp(20px, 5vw, 48px);
	font-weight: 600;
	line-height: clamp(15px, 5vw, 48px);
`;

const SmallText = styled.p`
	font-size: clamp(10px, 4vw, 18px);
	font-weight: 600;
`;

const LogoContainer: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<div className={className}>
			<Icon />
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
