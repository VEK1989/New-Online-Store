import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { GenreAuthorActionCreator } from '../../store/action-creators/genreAuthorActionCreator'
import ModalCategories from '../Modals/ModalCategories/ModalCategories'
import MyButton from '../ui/MyButton/MyButton'
import style from './AdminCategories.module.css'

const AdminCategories: React.FC = () => {
	const dispatch = useDispatch()

	const { author, genre } = useTypedSelector(state => state.genreAuthor)

	const [authorVisible, setAuthorVisible] = useState(false)
	const [genreVisible, setGenreVisible] = useState(false)

	const deleteSelectedGenre = (id: number) => {
		dispatch(GenreAuthorActionCreator.removeGenre(id))
	}

	const deleteSelectedAuthor = (id: number) => {
		dispatch(GenreAuthorActionCreator.removeAuthor(id))
	}

	return (
		<div>
			<div className={style.genreAuthor}>
				<div className={style.categoriesItem}>
					<MyButton onClick={() => setGenreVisible(true)}>Добавить жанр</MyButton>
					<table className={style.table}>
						<tbody>
							<tr>
								<th>id</th>
								<th>Название жанра</th>
								<th>Действия</th>
							</tr>
							{
								genre.map((item) => (
									<tr key={item.id}>
										<td>{item.id}</td>
										<td>{item.name}</td>
										<td><MyButton onClick={() => deleteSelectedGenre(item.id)}>X</MyButton></td>
									</tr>
								))
							}
						</tbody>
					</table>
				</div>
				<div className={style.categoriesItem}>
					<MyButton onClick={() => setAuthorVisible(true)}>Добавить автора</MyButton>
					<table className={style.table}>
						<tbody>
							<tr>
								<th>id</th>
								<th>Имя автора</th>
								<th>Действия</th>
							</tr>
							{
								author.map((item) => (
									<tr key={item.id}>
										<td>{item.id}</td>
										<td>{item.name}</td>
										<td><MyButton onClick={() => deleteSelectedAuthor(item.id)}>X</MyButton></td>
									</tr>
								))
							}
						</tbody>
					</table>
				</div>
			</div>
			<ModalCategories
				modalHeader={'Добавить жанр'}
				visible={genreVisible}
				onHide={() => setGenreVisible(false)}
			/>
			<ModalCategories
				modalHeader={'Добавить автора'}
				visible={authorVisible}
				onHide={() => setAuthorVisible(false)}
			/>
		</div>
	);
};

export default AdminCategories;