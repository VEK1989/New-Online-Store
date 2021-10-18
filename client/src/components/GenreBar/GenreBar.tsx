import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { GenreAuthorActionCreator } from '../../store/action-creators/genreAuthorActionCreator'
import { GoodsActionCreator } from '../../store/action-creators/goodsActionCreator'
import { IGenre } from '../../types/IGenreAuthor'
import style from './GenreBar.module.css'

const GenreBar: React.FC = () => {
	const dispatch = useDispatch()
	const genres = useTypedSelector(state => state.genreAuthor.genre)
	const selectedGenre = useTypedSelector(state => state.genreAuthor.selectedGenre)
	const page = useTypedSelector(state => state.goods.page)

	useEffect(() => {
		dispatch(GenreAuthorActionCreator.loadingGenre())
		dispatch(GenreAuthorActionCreator.loadingAuthor())
	}, [])

	const selectGenre = (genre: IGenre) => {
		dispatch(GenreAuthorActionCreator.setSelectedGenre(genre))
		dispatch(GoodsActionCreator.setPage(1))
	}

	// const selectAllGenre = () => {
	// 	dispatch(GoodsActionCreator.getAllGoods(null, null, 4, page))
	// 	dispatch(GoodsActionCreator.setPage(1))
	// }

	return (
		<ul className={style.listGenre}>
			{/* <li
				onClick={() => selectAllGenre()}
				className={style.listItem}
			>
				Все жанры
			</li> */}
			{
				genres.map(genre => {
					return <li
						onClick={() => selectGenre(genre)}
						key={genre.id}
						className={selectedGenre[0]?.id === genre.id ? style.selected : style.listItem}
					>
						{genre.name}
					</li>
				})
			}
		</ul>
	);
};

export default GenreBar;