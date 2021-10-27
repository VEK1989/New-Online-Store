import React from 'react'
import MyButton from '../../ui/MyButton/MyButton';
import MyInput from '../../ui/MyInput/MyInput';
import style from './ModalCategories.module.css'

interface ModalProps {
	visible: boolean,
	onHide: React.Dispatch<React.SetStateAction<boolean>>,
	modalHeader: string
}

const ModalCategories: React.FC<ModalProps> = ({ visible, onHide, modalHeader }) => {


	return (
		<div className={visible ? style.open : style.close}>
			<div className={style.modalWrapper}>
				<h3>{modalHeader}</h3>
				<form >
					<MyInput
						placeholder={'Введите название'}
					/>
				</form>
				<MyButton onClick={() => onHide(false)}>Закрыть</MyButton>
				<MyButton>Добавить</MyButton>
			</div>
		</div>
	);
};

export default ModalCategories;