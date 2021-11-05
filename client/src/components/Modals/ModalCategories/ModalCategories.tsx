import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { GenreAuthorActionCreator } from '../../../store/action-creators/genreAuthorActionCreator'
import MyButton from '../../ui/MyButton/MyButton'
import MyInput from '../../ui/MyInput/MyInput'
import style from './ModalCategories.module.css'

interface ModalProps {
	visible: boolean,
	onHide: React.Dispatch<React.SetStateAction<boolean>>,
	modalHeader: string
}

const ModalCategories: React.FC<ModalProps> = ({ visible, onHide, modalHeader }) => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()

	const addCategory = () => {
		if (modalHeader === 'Добавить автора') {
			dispatch(GenreAuthorActionCreator.addNewAuthor(value))
			setValue('')
			onHide(false)
		}
		else if (modalHeader === 'Добавить жанр') {
			dispatch(GenreAuthorActionCreator.addNewGenre(value))
			setValue('')
			onHide(false)
		}
	}

	return (
		<div className={visible ? style.open : style.close}>
			<div className={style.modalWrapper}>
				<h3>{modalHeader}</h3>
				<form >
					<MyInput
						placeholder={'Введите название'}
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
				</form>
				<MyButton onClick={() => onHide(false)}>Закрыть</MyButton>
				<MyButton onClick={() => addCategory()}>Добавить</MyButton>
			</div>
		</div>
	);
};

export default ModalCategories;