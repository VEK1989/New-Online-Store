import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { GenreAuthorActionCreator } from '../../store/action-creators/genreAuthorActionCreator'
import { IGenre } from '../../types/IGenreAuthor'
import style from './GenreBar.module.css'

const GenreBar: React.FC = () => {
	const dispatch = useDispatch()
	const genres = useTypedSelector(state => state.genreAuthor.genre)
	const selectedGenre = useTypedSelector(state => state.genreAuthor.selectedGenre)

	useEffect(() => {
		dispatch(GenreAuthorActionCreator.loadingGenre())
		dispatch(GenreAuthorActionCreator.loadingAuthor())
	}, [])

	const selectGenre = (genre: IGenre): any => {
		dispatch(GenreAuthorActionCreator.setSelectedGenre(genre))
	}

	return (
		<ul className={style.listGenre}>
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