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

const NavBar: React.FC = () => {
	const isAuth = useTypedSelector(state => state.auth.isAuth)
	const role = useTypedSelector(state => state.auth.user.role)
	const countGoods = useTypedSelector(state => state.cart.countGoods)

	const history = useHistory()

	const dispatch = useDispatch()

	const logout = () => {
		dispatch(AuthActionCreator.logout())
	}

	useEffect(() => {
		dispatch(CartActionCreator.getProductListFromCart())
	}, [])

	return (
		<header className={style.header} >
			<NavLink to={SHOP_ROUTE} className={style.logo}>
				<img src={logo} alt='logo' height='40px' width='40px' />
				<div>
					<span className={style.logoHeader}>BOOKSHELF</span>
					<span>your favorite</span>
				</div>
			</NavLink>
			{
				isAuth
					? <div className={style.buttons}>
						{role === 'ADMIN' && <MyButton onClick={() => history.push(ADMIN_ROUTE)}>Админ</MyButton>}
						<div className={style.cartButton}>
							<MyButton onClick={() => history.push(CART_ROUTE)}>
								Корзина
							</MyButton>
							<span className={style.cartCounter}>{countGoods}</span>
						</div>
						<MyButton onClick={logout}>Выйти</MyButton>
					</div>
					: <div>
						<MyButton onClick={() => history.push(LOGIN_ROUTE)}>Корзина</MyButton>
						<MyButton onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</MyButton>
					</div>
			}
		</header>
	);
};

export default NavBar;