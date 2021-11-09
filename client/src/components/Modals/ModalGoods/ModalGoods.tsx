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
	const { goods } = useTypedSelector(state => state.goods)
	const { author, genre, selectedAuthor, selectedGenre } = useTypedSelector(state => state.genreAuthor)
	const [name, setName] = useState('')
	const [price, setPrice] = useState(0)
	const [file, setFile] = useState('')
	const [info, setInfo] = useState([
		{ title: 'Издательство', description: '', id: 0 },
		{ title: 'Год выпуска', description: '', id: 1 },
		{ title: 'Количество страниц', description: '', id: 2 },
		{ title: 'Язык', description: '', id: 3 },
		{ title: 'Аннотация', description: '', id: 4 }
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
		setInfo(info.map(i => i.id === id ? { ...i, [key]: value } : i))
	}

	const addProduct = () => {
		const newProduct = {
			id: goods.length + 1,
			name: name,
			price: price,
			img: file,
			authorId: selectedAuthor[0].id,
			genreId: selectedGenre[0].id,
			rating: 0,
			info: [...info]
		}

		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', `${price}`)
		formData.append('img', file)
		formData.append('authorId', `${selectedAuthor[0].id}`)
		formData.append('genreId', `${selectedGenre[0].id}`)
		formData.append('info', JSON.stringify(info))
		dispatch(GoodsActionCreator.createProduct(newProduct, formData))
		dispatch(GenreAuthorActionCreator.setSelectedAuthor([]))
		dispatch(GenreAuthorActionCreator.setSelectedGenre([]))
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
								key={i.id}
								placeholder={i.title}
								value={i.description}
								onChange={(e: ChangeEvent<HTMLInputElement>) => changeInfo('description', `${e.target.value}`, i.id)}
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