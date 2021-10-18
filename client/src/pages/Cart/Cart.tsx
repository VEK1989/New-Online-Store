import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import MyButton from '../../components/ui/MyButton/MyButton'
import { SHOP_ROUTE } from '../../utils/consts'
import style from './Cart.module.css'
import emptyCart from '../../images/EmptyCart.png'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { CartActionCreator } from '../../store/action-creators/cartActionCreator'
import ProductInCart from '../../components/ProductInCart/ProductInCart'

const Cart: React.FC = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const cart = useTypedSelector(state => state.cart.cart)
	let allCartPrice = useTypedSelector(state => state.cart.allCartPrice)

	useEffect(() => {
		const allPrice = cart.reduce((sum, item) => {
			return sum + item.price
		}, 0)
		dispatch(CartActionCreator.setAllCartPrice(allPrice))
	}, [cart])

	useEffect(() => {
		dispatch(CartActionCreator.getProductListFromCart())
	}, [])

	return (
		<div className={style.cart}>
			{
				cart.length > 0
					? <div>
						{
							cart.map(product => {
								return <ProductInCart
									key={product.id}
									id={product.id}
									img={product.img}
									name={product.name}
									price={product.price}
								/>
							})}
						<div className={style.line}></div>
						<div className={style.totalPrice}>
							<span>Итоговая цена:</span>
							<div>
								<span>{allCartPrice} &#8381;</span>
								<MyButton>Заказать</MyButton>
							</div>
						</div>
					</div>
					: <div className={style.emptyCart}>
						<img src={emptyCart} alt='cart is empty' width='300px' height='300px' />
						<span className={style.emptyCartText}>
							Ваша корзина пуста. Если Вам что-то понравилось, пожалуйста, вернитесь в магазин и поместите выбранный товар в корзину.
						</span>
						<MyButton onClick={() => history.push(SHOP_ROUTE)}>Вернуться назад</MyButton>
					</div>
			}
		</div>
	);
};

export default Cart;