import React, { useState } from 'react'
import { IGenre } from '../../../types/IGenreAuthor'
import MyButton from '../MyButton/MyButton'
import style from './MySelect.module.css'

interface ISelectList {
	list: IGenre[],
	firstName: IGenre[],
	slectedItem(item: IGenre): void
}

const MySelect: React.FC<ISelectList> = ({ list, firstName, slectedItem }) => {
	const [itemsList, setItemsList] = useState(false)

	const showList = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
		e.preventDefault()
	}

	const selectListItem = (item: IGenre) => {
		slectedItem(item)
		setItemsList(false)
	}

	return (
		<span className={style.selectButton} onClick={(e) => showList(e)}>
			<MyButton
				onClick={() => setItemsList(true)}
			>
				{
					firstName[0] !== undefined
						? firstName[0].name
						: 'Выберите категорию'
				}
			</MyButton>
			{
				itemsList
					? <ul className={style.listBlock}>
						{
							list
								? list.map(item => {
									return <li
										onClick={() => selectListItem(item)}
										value={item.id}
										key={item.name}
										className={style.listItem}
									>
										{item.name}
									</li>
								})
								: null
						}
					</ul>
					: null
			}
		</span>
	);
};

export default MySelect;