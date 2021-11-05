import React, { useState } from 'react'
import AdminCategories from '../../components/AdminCategories/AdminCategories'
import AdminGoods from '../../components/AdminGoods/AdminGoods'
import style from './Admin.module.css'

const Admin: React.FC = () => {
	const [selectedScreenName, setSelectedScreenName] = useState('Товары')
	const chapters = ['Товары', 'Категории']

	const ClickOnChapter = (chapter: string) => {
		setSelectedScreenName(chapter)
	}

	return (
		<div className={style.adminPage}>
			<div className={style.selectPanel}>
				{
					chapters.map(chapter => {
						return <div
							key={chapter}
							className={selectedScreenName === chapter ? style.selected : style.screen}
							onClick={() => ClickOnChapter(chapter)}
						>
							{chapter}
						</div>
					})
				}
			</div>
			{
				selectedScreenName === 'Товары'
					? <AdminGoods />

					: <AdminCategories />
			}
		</div>
	);
};

export default Admin;