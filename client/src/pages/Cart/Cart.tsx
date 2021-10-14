import React from 'react'
import { useHistory } from 'react-router'
import MyButton from '../../components/ui/MyButton/MyButton'
import { SHOP_ROUTE } from '../../utils/consts'
import style from './Cart.module.css'
import emptyCart from '../../images/EmptyCart.png'

const Cart: React.FC = () => {
	const history = useHistory()

	return (
		<div className={style.emptyCart}>
			<img src={emptyCart} alt='cart is empty' width='300px' height='300px' />
			<span className={style.emptyCartText}>
				Ваша корзина пуста. Если Вам что-то понравилось, вернитесь, пожалуйста, в магазин и поместите выбранный товар в корзину.
			</span>
			<MyButton onClick={() => history.push(SHOP_ROUTE)}>Вернуться назад</MyButton>
		</div>
	);
};

export default Cart;