import React from 'react'
import { useDispatch } from 'react-redux'
import { Rating } from 'react-simple-star-rating'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { RatingActionCreator } from '../../store/action-creators/ratingActionCreator'

const StarRating: React.FC = () => {
	const rating = useTypedSelector(state => state.goods.product.rating)
	const { id } = useTypedSelector(state => state.goods.product)
	const { isRatingLoading, ratingError } = useTypedSelector(state => state.rating)
	const dispatch = useDispatch()

	const handleRating = (rate: number) => {
		dispatch(RatingActionCreator.putRating(rate, id))
	}

	return (
		<div>
			<Rating onClick={handleRating} ratingValue={rating} />
			{
				ratingError && <p>{ratingError}</p>
			}
		</div>
	);
};

export default StarRating;