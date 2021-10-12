import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
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
				<div>
					<h2>{product.name}</h2>
					<div>{product.price} &#8381;</div>
					<div>Рейтинг</div>
					<div>Свойства</div>
					<MyButton>Добавить в корзину</MyButton>
				</div>
			</div>
			<h2>Аннотация книги "{product.name}"</h2>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas et quasi quisquam, fuga maiores minima saepe molestias, repudiandae ullam enim sit hic illum quos ipsa sed est voluptates esse optio?</p>
		</div>
	);
};

export default ProductPage;