import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { server } from '../../bff';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button, H } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../reduxTK/reducers';

const authFormSchema = yup.object({
	login: yup
		.string()
		.required('Заполните поле Логин')
		.matches(
			/^[a-zA-Z0-9]+$/,
			'Неверно заполнен логин. Допустимы только буквы и цифры'
		)
		.min(3, 'Логин должен состоять как минимум из 3 символов')
		.max(15, 'Логин должен состоять как максимум из 15 символов'),
	password: yup
		.string()
		.required('Заполните поле Пароль')
		.matches(
			/^[a-zA-Z0-9№#\*\$%]+$/,
			'Неверно заполнен пароль. Допустимы только буквы, цифры и знаки № # * $ %'
		)
		.min(6, 'Пароль должен состоять как минимум из 6 символов')
		.max(30, 'Пароль должен состоять как максимум из 30 символов'),
});

type FormData = yup.InferType<typeof authFormSchema>;

interface AuthProps {
	className?: string;
}

const AuthorizationContainer: React.FC<AuthProps> = ({ className }) => {
	const [serverError, setServerError] = useState<string | null>(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});

	const onSubmit = (data: FormData) => {
		server.authorize(data.login, data.password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}

			dispatch(setUser(res));
			navigate('/');
			reset();
		});
	};

	const formError = errors?.login?.message || errors?.password?.message;
	const errorMessage = formError || serverError;

	return (
		<div className={className}>
			<H tag="h2" fontSize="clamp(20px, 3vw, 40px)" fontWeight="600">
				Авторизация
			</H>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					{...register('login', { onChange: () => setServerError(null) })}
					placeholder="Логин..."
				/>
				<Input
					type="password"
					{...register('password')}
					placeholder="Пароль..."
				/>
				<Button type="submit" disabled={!!formError} backgroundColor="#AFAFAF">
					Авторизоваться
				</Button>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
				<StyledLink to={'/register'}>Зарегистрироваться...</StyledLink>
			</form>
		</div>
	);
};

const StyledLink = styled(Link)`
	text-decoration: underline !important;
`;

const ErrorMessage = styled.div`
	background-color: #fcadad;
	width: 100%;
	height: min-content;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Authorization = styled(AuthorizationContainer)`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 20px;

	& > form {
		display: flex;
		width: clamp(200px, 15vw, 300px);
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 5px;
	}
`;
