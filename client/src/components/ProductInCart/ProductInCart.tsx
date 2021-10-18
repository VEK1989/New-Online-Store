import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { CartActionCreator } from '../../store/action-creators/cartActionCreator'
import MyButton from '../ui/MyButton/MyButton'
import style from './ProductInCart.module.css'

interface IproductInCartProps {
	id: number,
	img: string,
	name: string,
	price: number
}

const ProductInCart: React.FC<IproductInCartProps> = ({ id, img, name, price }) => {
	const cart = useTypedSelector(state => state.cart.cart)
	let countGoods = useTypedSelector(state => state.cart.countGoods)
	let allCartPrice = useTypedSelector(state => state.cart.allCartPrice)
	const dispatch = useDispatch()
	const [counter, setCounter] = useState<number>(1)

	const deleteProduct = (id: number) => {
		dispatch(CartActionCreator.deleteProductFromCart(id))
		const newCart = cart.filter(item => {
			return item.id !== id
		})
		dispatch(CartActionCreator.setCart(newCart))
		dispatch(CartActionCreator.setCountGoods(countGoods -= 1))
	}

	const decrement = (counter: number, id: number) => {
		if (counter <= 1) {
			deleteProduct(id)
		}
		setCounter(counter -= 1)
		dispatch(CartActionCreator.setAllCartPrice(allCartPrice -= price))
	}

	const increament = (counter: number) => {
		setCounter(counter += 1)
		dispatch(CartActionCreator.setAllCartPrice(allCartPrice += price))
	}

	return (
		<div className={style.productItem}>
			<div className={style.grupItem}>
				<img className={style.productImg} src={`http://localhost:5000/${img}`} alt='product picture' width='20px' height='40px' />
				<span>{name}</span>
			</div>
			<div className={style.counterBlock}>
				<MyButton onClick={() => decrement(counter, id)}>-</MyButton>
				<span className={style.counter}>{counter}</span>
				<MyButton onClick={() => increament(counter)}>+</MyButton>
			</div>
			<div className={style.productPrice}>
				<span>{(price * counter)} &#8381;</span>
				<MyButton onClick={() => deleteProduct(id)}>X</MyButton>
			</div>
		</div>
	);
};

export default ProductInCart;