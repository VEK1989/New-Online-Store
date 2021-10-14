import React from 'react'
import { Rating } from 'react-simple-star-rating'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const StarRating: React.FC = () => {
	const rating = useTypedSelector(state => state.goods.product.rating)

	const handleRating = () => {

	}

	return (
		<div>
			<Rating onClick={handleRating} ratingValue={rating} />
		</div>
	);
};

export default StarRating;