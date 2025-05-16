import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface FooterProps {
	className?: string;
}

const FooterContainer: React.FC<FooterProps> = ({ className }) => {
	const [weatherDicsr, setWeatherDiscr] = useState('');
	const [temperature, setTemperature] = useState(0);
	const [city, setCity] = useState('');

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Moscow&lang=ru&units=metric&appid=25bc09a4c244135d6e152540467230f2'
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setWeatherDiscr(weather[0].description);
				setTemperature(Math.round(main.temp));
				setCity(name);
			});
	}, []);
	return (
		<div className={className}>
			<div>
				<div> Блог веб-разработчика </div>
				<div>web@developer.ru</div>
			</div>

			{weatherDicsr && temperature && city ? (
				<div>
					<div>
						{city},{' '}
						{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
					</div>
					<div>
						{temperature} градусов, {weatherDicsr}
					</div>
				</div>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 15px;
	bottom: 0;
	right: 0;
	left: 0;
	height: max-content;
	padding: 20px clamp(10px, 2vw, 40px);
	box-shadow: 0 0 15px black;
	position: sticky;
	background-color: white;
	font-weight: bold;
	font-size: clamp(10px, 2vw, 18px);
`;
