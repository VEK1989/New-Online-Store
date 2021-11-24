import React, { useEffect } from 'react'
import style from './NavBar.module.css'
import logo from '../../images/books_logo.png'
import MyButton from '../ui/MyButton/MyButton'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { NavLink, useHistory } from 'react-router-dom'
import { ADMIN_ROUTE, CART_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts'
import { useDispatch } from 'react-redux'
import { AuthActionCreator } from '../../store/action-creators/authActionCreator'
import { CartActionCreator } from '../../store/action-creators/cartActionCreator'
import SearchInput from '../SearchInput/SearchInput'

const NavBar: React.FC = () => {
	const isAuth = useTypedSelector(state => state.auth.isAuth)
	const { role, email } = useTypedSelector(state => state.auth.user)
	const countGoods = useTypedSelector(state => state.cart.countGoods)

	const history = useHistory()

	const dispatch = useDispatch()

	const logout = () => {
		dispatch(AuthActionCreator.logout(email))
	}

	useEffect(() => {
		dispatch(CartActionCreator.getProductListFromCart())
	}, [])

	return (
		<header className={style.header} >
			<div className={style.headerWrapper}>
				<NavLink to={SHOP_ROUTE} className={style.logo}>
					<img src={logo} alt='logo' height='20px' width='20px' />
					<span className={style.logoHeader}>BOOKSHELF</span>
				</NavLink>
				<SearchInput />
				{
					isAuth
						? <div className={style.buttons}>
							{role === 'ADMIN' && <span className={style.iconCog} onClick={() => history.push(ADMIN_ROUTE)}></span>}
							<div className={style.cartButton}>
								<span className={style.iconCart} onClick={() => history.push(CART_ROUTE)}></span>
								<span className={style.cartCounter}>{countGoods}</span>
							</div>
							<MyButton onClick={logout}>Выйти</MyButton>
						</div>
						: <div className={style.buttons}>
							<span className={style.iconCart} onClick={() => history.push(LOGIN_ROUTE)}></span>
							<MyButton onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</MyButton>
						</div>
				}
			</div>
		</header>
	);
};

export default NavBar;