import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { GenreAuthorActionCreator } from '../../../store/action-creators/genreAuthorActionCreator'
import { GoodsActionCreator } from '../../../store/action-creators/goodsActionCreator'
import { IAuthor, IGenre } from '../../../types/IGenreAuthor'
import MyButton from '../../ui/MyButton/MyButton'
import MyInput from '../../ui/MyInput/MyInput'
import MySelect from '../../ui/MySelect/MySelect'
import style from './ModalGoods.module.css'

interface ModalProps {
	visible: boolean,
	onHide: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalGoods: React.FC<ModalProps> = ({ visible, onHide }) => {
	const dispatch = useDispatch()

	const { author, genre, selectedAuthor, selectedGenre } = useTypedSelector(state => state.genreAuthor)
	const [name, setName] = useState('')
	const [price, setPrice] = useState(0)
	const [file, setFile] = useState('')
	const [info, setInfo] = useState([
		{ titel: 'Издательство', discription: '', number: 0 },
		{ titel: 'Год выпуска', discription: '', number: 1 },
		{ titel: 'Количество страниц', discription: '', number: 2 },
		{ titel: 'Язык', discription: '', number: 3 },
		{ titel: 'Аннотация', discription: '', number: 4 }
	])

	const dontClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation()
	}

	const selectAuthor = (author: IAuthor) => {
		dispatch(GenreAuthorActionCreator.setSelectedAuthor(author))
	}

	const selectGenre = (genre: IGenre) => {
		dispatch(GenreAuthorActionCreator.setSelectedGenre(genre))
	}

	const selectFile = (e: any) => {
		setFile(e.target.files[0])
	}

	const changeInfo = (key: string, value: any, id: number) => {
		setInfo(info.map(i => i.number === id ? { ...i, [key]: value } : i))
	}

	const addProduct = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', `${price}`)
		formData.append('img', file)
		formData.append('authorId', `${selectedAuthor[0].id}`)
		formData.append('genreId', `${selectedGenre[0].id}`)
		formData.append('info', JSON.stringify(info))
		dispatch(GoodsActionCreator.createProduct(formData))
		onHide(false)
	}


	return (
		<div className={visible ? style.open : style.close} onClick={() => onHide(false)}>
			<div className={style.modalWrapper} onClick={(e) => dontClose(e)}>
				<h2>Добавить товар</h2>
				<form>
					<MySelect
						list={author}
						firstName={selectedAuthor}
						slectedItem={selectAuthor}
					/>
					<MySelect
						list={genre}
						firstName={selectedGenre}
						slectedItem={selectGenre}
					/>
					< MyInput
						value={name}
						onChange={e => setName(e.target.value)}
						placeholder='Введите название'
					/>
					<MyInput
						onChange={e => setPrice(Number(e.target.value))}
						value={price}
						placeholder='Введите стоимость'
						type='number'
					/>
					<MyInput
						type='file'
						onChange={selectFile}
					/>
					<h3>Описание</h3>
					{
						info.map(i => {
							return <MyInput
								key={i.number}
								placeholder={i.titel}
								value={i.discription}
								onChange={(e: ChangeEvent<HTMLInputElement>) => changeInfo('discription', `${e.target.value}`, i.number)}
							/>
						})
					}
				</form>
				<MyButton onClick={() => onHide(false)}>Закрыть</MyButton>
				<MyButton onClick={() => addProduct()}>Добавить</MyButton>
			</div>
		</div >
	);
};

export default ModalGoods;