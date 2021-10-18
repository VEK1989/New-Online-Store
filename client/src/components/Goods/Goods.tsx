import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { GoodsActionCreator } from '../../store/action-creators/goodsActionCreator'
import ProductCart from '../ProductCart/ProductCart'
import style from './Goods.module.css'

const Goods: React.FC = () => {
	const goods = useTypedSelector(state => state.goods.goods)
	const selectedGenre = useTypedSelector(state => state.genreAuthor.selectedGenre)
	const selectedAuthor = useTypedSelector(state => state.genreAuthor.selectedAuthor)
	const page = useTypedSelector(state => state.goods.page)
	const limit = useTypedSelector(state => state.goods.limit)


	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(GoodsActionCreator.getAllGoods(null, null, limit, page))
	}, [])

	useEffect(() => {
		dispatch(GoodsActionCreator.getAllGoods(selectedGenre[0]?.id, selectedAuthor[0]?.id, limit, page))
	}, [page, selectedGenre, selectedAuthor])

	return (
		<div className={style.goods}>
			{
				goods.map(product => {
					return <ProductCart
						key={product.id}
						id={product.id}
						name={product.name}
						price={product.price}
						img={product.img}
						rating={product.rating}
					/>
				})
			}
		</div>
	);
};

export default Goods;