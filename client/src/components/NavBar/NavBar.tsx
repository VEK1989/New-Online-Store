import React from 'react'
import style from './NavBar.module.css'
import logo from '../../images/books_logo.png'
import MyButton from '../ui/MyButton/MyButton'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../../utils/consts'
import { useDispatch } from 'react-redux'
import { AuthActionCreator } from '../../store/action-creators/authActionCreator'

const NavBar: React.FC = () => {
	const isAuth = useTypedSelector(state => state.auth.isAuth)
	const user = useTypedSelector(state => state.auth.user.email)
	const role = useTypedSelector(state => state.auth.user.role)

	const dispatch = useDispatch()

	const logout = () => {
		dispatch(AuthActionCreator.logout())
	}
	return (
		<header className={style.header} >
			<NavLink to={SHOP_ROUTE} className={style.logo}>
				<img src={logo} alt='logo' height='40px' width='40px' />
				<div>
					<span className={style.logoHeader}>BOOKSHELF</span>
					<span>we sell books</span>
				</div>
			</NavLink>
			{
				isAuth
					? <div>
						<span>{user}</span>
						{role === 'ADMIN' && <MyButton>Админ</MyButton>}
						<MyButton>Корзина</MyButton>
						<MyButton onClick={logout}>Выйти</MyButton>
					</div>
					: <div>
						<MyButton>Авторизация</MyButton>
					</div>
			}
		</header>
	);
};

export default NavBar;