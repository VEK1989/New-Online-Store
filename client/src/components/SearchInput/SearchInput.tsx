import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { GenreAuthorActionCreator } from '../../store/action-creators/genreAuthorActionCreator'
import { GoodsActionCreator } from '../../store/action-creators/goodsActionCreator'
import MyInput from '../ui/MyInput/MyInput'
import style from './SearchInput.module.css'

const SearchInput: React.FC = () => {
	const [search, setSearch] = useState('')
	const authors = useTypedSelector(state => state.genreAuthor.author)
	const selectAuthor = useTypedSelector(state => state.genreAuthor.selectedAuthor)
	const dispatch = useDispatch()

	const filterAuthorByName = authors.filter(author => {
		return author.name.toLowerCase().includes(search.toLowerCase())
	})

	useEffect(() => {
		let filterParam = filterAuthorByName[0]  //плохой код надо передумать
		if (!search) {
			filterParam = filterAuthorByName[10]
		}
		console.log(filterParam)
		dispatch(GenreAuthorActionCreator.setSelectedAuthor(filterParam))
		dispatch(GoodsActionCreator.setPage(1))
	}, [filterAuthorByName[0]])

	return (
		<div className={style.searchBlock}>
			<MyInput
				value={search}
				type='text'
				placeholder='Поиск по имени автора'
				onChange={e => setSearch(e.target.value)}
			/>
		</div>
	);
};

export default SearchInput;