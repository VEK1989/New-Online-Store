import React from 'react'
import style from './Slide.module.css'
import star from '../../images/star.png'
import { useHistory } from 'react-router';
import { PRODUCT_ROUTE } from '../../utils/consts';

interface ISlide {
	image: string,
	rating: number,
	id: number
}

const Slide: React.FC<ISlide> = ({ image, rating, id }) => {
	const history = useHistory()

	return (
		<div className={style.slide}>
			<img
				src={`http://localhost:5000/${image}`}
				alt='book photo'
				width='70px'
				height='100px'
				className={style.bookCover}
				onClick={() => history.push(PRODUCT_ROUTE + `/${id}`)}
			/>
			<div className={style.rating}>
				<img
					src={star}
					alt='star'
					width='10px'
					height='10px'
				/>
				<span>{rating}</span>
			</div>
		</div>
	);
};

export default Slide;