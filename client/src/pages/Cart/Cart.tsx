import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import MyButton from '../../components/ui/MyButton/MyButton'
import { SHOP_ROUTE } from '../../utils/consts'
import style from './Cart.module.css'
import emptyCart from '../../images/EmptyCart.png'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { CartActionCreator } from '../../store/action-creators/cartActionCreator'

const Cart: React.FC = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const cart = useTypedSelector(state => state.cart.cart)

	const deleteProduct = (id: number) => {
		dispatch(CartActionCreator.deleteProductFromCart(id))
		localStorage.removeItem(`${id}`)
		const newCart = cart.filter(item => {
			return item.id !== id
		})
		dispatch(CartActionCreator.setCart(newCart))
	}

	useEffect(() => {
		dispatch(CartActionCreator.getProductListFromCart())
	}, [])

	return (
		<div className={style.cart}>
			{
				cart.length > 0
					? <div>{cart.map(product => {
						return <div key={product.id} className={style.productItem}>
							<div className={style.grupItem}>
								<img className={style.productImg} src={`http://localhost:5000/${product.img}`} alt='product picture' width='20px' height='40px' />
								<span>{product.name}</span>
							</div>
							<div className={style.productPrice}>
								<span>{product.price} &#8381;</span>
								<MyButton onClick={() => deleteProduct(product.id)}>X</MyButton>
							</div>
						</div>
					})}</div>
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