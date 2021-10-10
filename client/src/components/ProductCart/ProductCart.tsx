import React from 'react'
import MyButton from '../ui/MyButton/MyButton'
import style from './ProductCart.module.css'

const ProductCart: React.FC = () => {
	return (
		<div className={style.productCart}>
			<img src='' alt='book cover' height='250px' width='180px' />
			<div className={style.productInfo}>
				<div>300 &#8381;</div>
				<div>Name</div>
				<div>Rating</div>
				<MyButton>В корзину</MyButton>
			</div>
		</div>
	);
};

export default ProductCart;