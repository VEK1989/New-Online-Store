import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { PRODUCT_ROUTE } from '../../utils/consts'
import style from './ProductCart.module.css'
import star from '../../images/star.png'
import { useDispatch } from 'react-redux'
import { CartActionCreator } from '../../store/action-creators/cartActionCreator'
import { useTypedSelector } from '../../hooks/useTypedSelector'

interface ProductProps {
	id: number
	name: string,
	price: number,
	rating: number,
	img: string,
}

const ProductCart: React.FC<ProductProps> = ({ id, name, price, rating, img }) => {
	const history = useHistory()
	const dispatch = useDispatch()
	const [isInCart, setIsInCart] = useState(false)
	const cart = useTypedSelector(state => state.cart.cart)
	let countGoods = useTypedSelector(state => state.cart.countGoods)

	useEffect(() => {
		const item = cart.find(item => {
			return item.id == id
		})
		if (item) {
			setIsInCart(true)
		}
	}, [])

	return (
		<div className={style.productCart}>
			<img
				src={`http://localhost:5000/${img}`}
				alt='book cover'
				height='300px'
				width='200px'
				onClick={() => history.push(PRODUCT_ROUTE + `/${id}`)}
				className={style.productImg}
			/>
			<div className={style.productInfo}>
				<div className={style.price} onClick={() => history.push(PRODUCT_ROUTE + `/${id}`)} >{price} &#8381;</div>
				<div onClick={() => history.push(PRODUCT_ROUTE + `/${id}`)} className={style.productName}>{name}</div>
				<div className={style.rating}>
					<img src={star} alt='star' height='18px' width='18px' />
					{
						rating
					}
				</div>
			</div>
		</div>
	);
};

export default ProductCart;