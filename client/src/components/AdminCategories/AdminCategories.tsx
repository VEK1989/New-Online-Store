import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import style from './AdminCategories.module.css'

const AdminCategories: React.FC = () => {
	const { author, genre } = useTypedSelector(state => state.genreAuthor)

	return (
		<div>
			<div className={style.genreAuthor}>
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
									<td>Действия</td>
								</tr>
							))
						}
					</tbody>
				</table>
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
									<td>Действия</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AdminCategories;