import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
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
	const { error } = useTypedSelector(state => state.genreAuthor)
	const [value, setValue] = useState('')
	const dispatch = useDispatch()

	const dontClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation()
	}

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
		<div className={visible ? style.open : style.close} onClick={() => onHide(false)}>
			<div className={style.modalWrapper} onClick={(e) => dontClose(e)}>
				<h3>{modalHeader}</h3>
				<form >
					{
						error
							? <h4>{error}</h4>
							: null
					}
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