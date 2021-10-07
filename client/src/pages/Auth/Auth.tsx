import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import MyButton from '../../components/ui/MyButton/MyButton'
import MyInput from '../../components/ui/MyInput/MyInput'
import { AuthActionCreator } from '../../store/action-creators/authActionCreator'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts'
import style from './Auth.module.css'

const Auth: React.FC = () => {
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()

	const submit = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault()
		dispatch(AuthActionCreator.login(email, password))
	}

	return (
		<div className={style.authForm}>
			<div className={style.formTable}>
				<h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
				<form >
					<label>Email</label>
					<MyInput
						onChange={e => setEmail(e.target.value)}
						value={email}
						type='email'
						placeholder='Введите email...'
					/>
					<label>Пароль</label>
					<MyInput
						onChange={e => setPassword(e.target.value)}
						value={password}
						type='password'
						placeholder='Введите пароль'
					/>
					<div className={style.registLink}>
						{isLogin
							? <div>
								<p>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегестрируйся!</NavLink></p>
							</div>
							: <div>
								<p>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink></p>
							</div>
						}
						<MyButton onClick={submit}>
							{isLogin
								? 'Войти'
								: 'Регистрация'
							}
						</MyButton>
					</div>

				</form>
			</div>
		</div>
	);
};

export default Auth;