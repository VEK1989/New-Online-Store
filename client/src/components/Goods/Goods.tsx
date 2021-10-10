import React from 'react'
import ProductCart from '../ProductCart/ProductCart';
import style from './Goods.module.css'

const Goods: React.FC = () => {
	return (
		<div className={style.goods}>
			<ProductCart />
		</div>
	);
};

export default Goods;