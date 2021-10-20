import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { GoodsActionCreator } from '../../store/action-creators/goodsActionCreator'
import MyInput from '../ui/MyInput/MyInput'
import style from './SearchInput.module.css'

const SearchInput: React.FC = () => {
	const [search, setSearch] = useState('')
	const authors = useTypedSelector(state => state.genreAuthor.author)
	const { limit, page } = useTypedSelector(state => state.goods)
	const dispatch = useDispatch()

	const filterAuthorByName = authors.filter(author => {
		return author.name.toLowerCase().includes(search.toLowerCase())
	})

	const selectAuthor = (id: number) => {
		dispatch(GoodsActionCreator.getAllGoods(id, null, limit, page))
		setSearch('')
	}

	return (
		<form className={style.searchBlock}>
			<MyInput
				value={search}
				type='text'
				placeholder='Поиск по имени автора'
				onChange={e => setSearch(e.target.value)}
			/>
			<ul className={style.autocomplete}>
				{
					search
						? filterAuthorByName.map(item => {
							return <li
								key={item.id}
								className={style.autocomleteItem}
								onClick={() => selectAuthor(item.id)}
							>
								{item.name}
							</li>
						})
						: null
				}
			</ul>
		</form>
	);
};

export default SearchInput;