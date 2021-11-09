import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import StarRating from '../../components/StarRating/StarRating'
import MyButton from '../../components/ui/MyButton/MyButton'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { CartActionCreator } from '../../store/action-creators/cartActionCreator'
import { GoodsActionCreator } from '../../store/action-creators/goodsActionCreator'
import style from './ProductPage.module.css'

const ProductPage: React.FC = () => {
	const location = useLocation()
	const dispatch = useDispatch()
	const [isInCart, setIsInCart] = useState(false)
	const product = useTypedSelector(state => state.goods.product)
	let { countGoods } = useTypedSelector(state => state.cart)
	const cart = useTypedSelector(state => state.cart.cart)
	const id = Number(location.pathname.split('/')[2])

	useEffect(() => {
		dispatch(GoodsActionCreator.getOneProduct(id))
		const item = cart.find(item => {
			return item.id == id
		})
		if (item) {
			setIsInCart(true)
		}
	}, [])

	const inCart = (id: number) => {
		dispatch(CartActionCreator.putProductInMyCart(id))
		dispatch(CartActionCreator.setCountGoods(countGoods += 1))
		setIsInCart(true)
	}

	return (
		<div className={style.product}>
			<div className={style.description}>
				<img src={`http://localhost:5000/${product.img}`} alt='product photo' width='350px' height='450px' />
				<div className={style.properties}>
					<div>
						<h2>{product.name}</h2>
						<span className={style.price}>Цена: {product.price} &#8381;</span>
						<div className={style.ratingBlock}>
							<span className={style.ratingValue}>{product.rating}</span>
							<StarRating />
						</div>
						{
							product.info
								? <div className={style.proprtiesList}>
									<div>
										<span className={style.propertiesHeader}>Издательство: </span>
										<span className={style.propertiesValue}>{product.info[0].description}</span>
									</div>
									<div>
										<span className={style.propertiesHeader}>Год выпуска: </span>
										<span className={style.propertiesValue}>{product.info[1].description} г.</span>
									</div>
									<div>
										<span className={style.propertiesHeader}>Количество страниц: </span>
										<span className={style.propertiesValue}>{product.info[2].description} стр.</span>
									</div>
									<div>
										<span className={style.propertiesHeader}>Язык издания: </span>
										<span className={style.propertiesValue}>{product.info[3].description}</span>
									</div>
								</div>
								: null
						}
					</div>
					{
						isInCart
							? <MyButton disabled > &#10004; В корзине</MyButton>
							: <MyButton onClick={() => inCart(id)}>Добавить в корзину</MyButton>
					}
				</div>
			</div>
			<h2>Аннотация книги "{product.name}"</h2>
			{
				product.info
					? <p className={style.productDiscription}>{product.info[4].description}</p>
					: null
			}
		</div>
	);
};

export default ProductPage;