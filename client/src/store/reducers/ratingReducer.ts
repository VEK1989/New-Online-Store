import { TRating, RatingActions, RatingActionTypes } from './../../types/rating'

const InitialState: TRating = {
	isRatingLoading: false,
	ratingError: ''
}

export const ratingReducer = (state = InitialState, action: RatingActions) => {
	switch (action.type) {

		case RatingActionTypes.SET_RATING_IS_LOADING:
			return {
				...state,
				isLoading: action.payload
			}

		case RatingActionTypes.SET_RATING_ERROR:
			return {
				...state,
				error: action.payload
			}

		default:
			return state
	}
}