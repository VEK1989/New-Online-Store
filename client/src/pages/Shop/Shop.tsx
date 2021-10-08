import React from 'react'
import GenreBar from '../../components/GenreBar/GenreBar'
import Goods from '../../components/Goods/Goods';
import style from './Shop.module.css'

const Shop: React.FC = () => {
	return (
		<div className={style.shop}>
			<GenreBar />
			<Goods />
		</div>
	);
};

export default Shop;