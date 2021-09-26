import React from 'react'
import style from './MyButton.module.css'

const MyButton: React.FC = ({ children, ...props }) => {
	return (
		<button {...props} className={style.button}>
			{children}
		</button>
	);
};

export default MyButton;