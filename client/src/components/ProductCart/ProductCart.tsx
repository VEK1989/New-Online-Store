import React from 'react'
import { useHistory } from 'react-router'
import { PRODUCT_ROUTE } from '../../utils/consts'
import style from './ProductCart.module.css'
import star from '../../images/star.png'
import loading from '../../images/loading.gif'

interface ProductProps {
	id: number
	name: string,
	price: number,
	rating: number,
	img: string,
	isLoading: boolean
}

const ProductCart: React.FC<ProductProps> = ({ id, name, price, rating, img, isLoading }) => {
	const history = useHistory()

	return (
		<div className={style.productCart}>
			{
				isLoading
					? <div className={style.loading}>
						<img src={loading} alt='Loading...' height='50px' width='50px' />
					</div>
					: <div>
						<img
							src={`http://localhost:5000/${img}`}
							alt='book cover'
							height='300px'
							width='200px'
							onClick={() => history.push(PRODUCT_ROUTE + `/${id}`)}
							className={style.productImg}
						/>
						<div className={style.productInfo}>
							<div className={style.price} onClick={() => history.push(PRODUCT_ROUTE + `/${id}`)} >{price} &#8381;</div>
							<div onClick={() => history.push(PRODUCT_ROUTE + `/${id}`)} className={style.productName}>{name}</div>
							<div className={style.rating}>
								<img src={star} alt='star' height='18px' width='18px' />
								{
									rating
								}
							</div>
						</div>
					</div>
			}
		</div>
	);
};

export default ProductCart;