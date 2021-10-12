import React from 'react'
import { useHistory } from 'react-router'
import { PRODUCT_ROUTE } from '../../utils/consts'
import MyButton from '../ui/MyButton/MyButton'
import style from './ProductCart.module.css'
import star from '../../images/star.png'

interface ProductProps {
	id: number
	name: string,
	price: number,
	rating: number,
	img: string,
}

const ProductCart: React.FC<ProductProps> = ({ id, name, price, rating, img }) => {
	const history = useHistory()

	return (
		<div className={style.productCart}>
			<img
				src={`http://localhost:5000/${img}`}
				alt='book cover'
				height='180px'
				width='130px'
				onClick={() => history.push(PRODUCT_ROUTE + `/${id}`)}
				className={style.productImg}
			/>
			<div className={style.productInfo}>
				<div onClick={() => history.push(PRODUCT_ROUTE + `/${id}`)} className={style.productName}>{name}</div>
				<div className={style.priceRate}>
					<div onClick={() => history.push(PRODUCT_ROUTE + `/${id}`)} >{price} &#8381;</div>
					<div className={style.rating}>
						{
							rating
						}
						<img src={star} alt='star' height='18px' width='18px' />
					</div>
				</div>
				<MyButton>В корзину</MyButton>
			</div>
		</div>
	);
};

export default ProductCart;