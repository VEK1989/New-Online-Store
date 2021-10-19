import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { GoodsActionCreator } from '../../store/action-creators/goodsActionCreator';
import MyButton from '../ui/MyButton/MyButton';
import style from './Pagination.module.css'

const Pagination: React.FC = () => {
	const totalCount = useTypedSelector(state => state.goods.totalCount)
	const limit = useTypedSelector(state => state.goods.limit)
	const statePage = useTypedSelector(state => state.goods.page)
	const pageCount = Math.ceil(totalCount / limit)
	const dispatch = useDispatch()
	const portionSize = 5
	const [portionNumber, setPortionNumber] = useState(1)

	const pages = []

	for (let i = 0; i < pageCount; i++) {
		pages.push(i + 1)
	}

	const portionCount = Math.ceil(pageCount / portionSize)
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	const rightPortionPageNumber = portionNumber * portionSize

	const selectPage = (page: number) => {
		dispatch(GoodsActionCreator.setPage(page))
	}

	return (
		<div className={style.pagination}>
			{
				portionNumber > 1 &&
				<span>
					<MyButton onClick={() => { setPortionNumber(portionNumber - 1) }}>{'<'}</MyButton>
					<span className={style.points} >...</span>
				</span>
			}
			{
				pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
					.map(page => {
						return <div
							key={page}
							className={statePage === page ? style.activePage : style.page}
							onClick={() => selectPage(page)}
						>
							{page}
						</div>
					})
			}
			{
				portionCount > portionNumber &&
				<span>
					<span className={style.points} >...</span>
					<MyButton onClick={() => { setPortionNumber(portionNumber + 1) }} >{'>'}</MyButton>
				</span>
			}
		</div>
	);
};

export default Pagination;