import React from 'react'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../../utils/consts'
import style from './Footer.module.css'

const Footer: React.FC = () => {
	return (
		<footer className={style.footer}>
			<div className={style.wrapper}>
				<NavLink to={SHOP_ROUTE}>
					<span className={style.logoHeader}>BOOKSHELF</span>
				</NavLink>

			</div>
		</footer>
	);
};

export default Footer;