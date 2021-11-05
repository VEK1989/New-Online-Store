import React from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import MyButton from '../../ui/MyButton/MyButton'
import MyInput from '../../ui/MyInput/MyInput'
import style from './ModalGoods.module.css'

interface ModalProps {
	visible: boolean,
	onHide: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalGoods: React.FC<ModalProps> = ({ visible, onHide }) => {
	const { author, genre } = useTypedSelector(state => state.genreAuthor)


	return (
		<div className={visible ? style.open : style.close}>
			<div className={style.modalWrapper}>
				<h2>Добавить товар</h2>
				<form >
					<select >
						<option>Выберите автора</option>
						{
							author.map(item => {
								return <option value={item.id}>{item.name}</option>
							})
						}
					</select>
					<select >
						<option>Выберите жанр</option>
						{
							genre.map(item => {
								return <option value={item.id}>{item.name}</option>
							})
						}
					</select>
					<MyInput
						placeholder='Введите название'
					/>
					<MyInput
						placeholder='Введите стоимость'
						type='number'
					/>
					<MyInput
						type='file'
					/>
					<h3>Описание</h3>
					<MyInput
						placeholder='Введите издательство'
					/>
					<MyInput
						placeholder='Введите год выпуска'
						type='number'
					/>
					<MyInput
						placeholder='Введите количество страниц'
						type='number'
					/>
					<MyInput
						placeholder='Введите язык'
					/>
					<MyInput
						placeholder='Введите аннотацию'
					/>
				</form>
				<MyButton onClick={() => onHide(false)}>Закрыть</MyButton>
				<MyButton>Добавить</MyButton>
			</div>
		</div >
	);
};

export default ModalGoods;