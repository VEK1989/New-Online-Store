import React from 'react'
import style from './MyButton.module.css'

interface IPropsButton {
	onClick?: React.MouseEventHandler<HTMLButtonElement>,
	value?: string
}

const MyButton: React.FC<IPropsButton> = ({ children, ...props }) => {
	return (
		<button {...props} className={style.button}>
			{children}
		</button>
	);
};

export default MyButton;