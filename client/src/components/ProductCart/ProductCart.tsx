import React from 'react'
import MyButton from '../ui/MyButton/MyButton'
import style from './ProductCart.module.css'

interface ProductProps {
	name: string,
	price: number,
	rating: number,
	img: string,
}

const ProductCart: React.FC<ProductProps> = ({ name, price, rating, img }) => {
	return (
		<div className={style.productCart}>
			<img src={`http://localhost:5000/${img}`} alt='book cover' height='180px' width='130px' />
			<div className={style.productInfo}>
				<div>{price} &#8381;</div>
				<div>{name}</div>
				<div>{rating}</div>
				<MyButton>В корзину</MyButton>
			</div>
		</div>
	);
};

export default ProductCart;