import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import MyButton from '../../components/ui/MyButton/MyButton'
import MyInput from '../../components/ui/MyInput/MyInput'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { AuthActionCreator } from '../../store/action-creators/authActionCreator'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts'
import style from './Auth.module.css'

const Auth: React.FC = () => {
	const error = useTypedSelector(state => state.auth.error)
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()

	const submit = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault()
		if (isLogin) {
			dispatch(AuthActionCreator.login(email, password))
			setEmail('')
			setPassword('')
		} else {
			dispatch(AuthActionCreator.registration(email, password))
			setEmail('')
			setPassword('')
		}
	}

	return (
		<div className={style.authForm}>
			<div className={style.formTable}>
				<h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
				<form >
					<p className={style.error}>{error}</p>
					<MyInput
						onChange={e => setEmail(e.target.value)}
						value={email}
						type='email'
						placeholder='Введите email...'
					/>
					<MyInput
						onChange={e => setPassword(e.target.value)}
						value={password}
						type='password'
						placeholder='Введите пароль'
					/>
					<div className={style.registLink}>
						{isLogin
							? <div>
								<p>Нет аккаунта? <NavLink className={style.link} to={REGISTRATION_ROUTE}>Зарегестрируйтесь!</NavLink></p>
							</div>
							: <div>
								<p>Есть аккаунт? <NavLink className={style.link} to={LOGIN_ROUTE}>Войдите!</NavLink></p>
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