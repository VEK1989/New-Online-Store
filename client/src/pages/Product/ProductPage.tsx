import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import StarRating from '../../components/StarRating/StarRating'
import MyButton from '../../components/ui/MyButton/MyButton'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { GoodsActionCreator } from '../../store/action-creators/goodsActionCreator'
import style from './ProductPage.module.css'

const ProductPage: React.FC = () => {
	const location = useLocation()
	const dispatch = useDispatch()
	const product = useTypedSelector(state => state.goods.product)

	useEffect(() => {
		const id = Number(location.pathname.split('/')[2])
		dispatch(GoodsActionCreator.getOneProduct(id))
	}, [])

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
					</div>
					<div>{product.info}</div>
					<MyButton>Добавить в корзину</MyButton>
				</div>
			</div>
			<h2>Аннотация книги "{product.name}"</h2>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas et quasi quisquam, fuga maiores minima saepe molestias, repudiandae ullam enim sit hic illum quos ipsa sed est voluptates esse optio?</p>
		</div>
	);
};

export default ProductPage;