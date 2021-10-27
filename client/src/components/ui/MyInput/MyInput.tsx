import React from 'react'
import style from './MyInput.module.css'

interface InputProps {
	onChange?: React.ChangeEventHandler<HTMLInputElement>,
	value?: string,
	type?: string,
	placeholder?: string
}

const MyInput: React.FC<InputProps> = (props) => {
	return (
		<input className={style.input} {...props} />
	);
};

export default MyInput;