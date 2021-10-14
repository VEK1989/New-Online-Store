import React from 'react'
import style from './MyButton.module.css'

interface IPropsButton {
	onClick?: React.MouseEventHandler<HTMLButtonElement>,
	value?: string,
	disabled?: boolean
}

const MyButton: React.FC<IPropsButton> = ({ children, ...props }) => {
	return (
		<button {...props} className={!props.disabled ? style.button : style.disable}>
			{children}
		</button>
	);
};

export default MyButton;