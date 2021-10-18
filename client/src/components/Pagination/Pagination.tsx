import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { GoodsActionCreator } from '../../store/action-creators/goodsActionCreator';
import style from './Pagination.module.css'

const Pagination: React.FC = () => {
	const totalCount = useTypedSelector(state => state.goods.totalCount)
	const limit = useTypedSelector(state => state.goods.limit)
	const statePage = useTypedSelector(state => state.goods.page)
	const pageCount = Math.ceil(totalCount / limit)
	const dispatch = useDispatch()

	const pages = []

	for (let i = 0; i < pageCount; i++) {
		pages.push(i + 1)
	}

	const selectPage = (page: number) => {
		dispatch(GoodsActionCreator.setPage(page))
	}

	return (
		<div className={style.pagination}>
			{
				pages.map(page => {
					return <div
						key={page}
						className={statePage === page ? style.activePage : style.page}
						onClick={() => selectPage(page)}
					>
						{page}
					</div>
				})
			}
		</div>
	);
};

export default Pagination;