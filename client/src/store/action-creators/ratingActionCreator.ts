import { AppDispatch } from './../store'
import { RatingActions, RatingActionTypes } from './../../types/rating'
import RatingService from '../../service/RatingService'

export const RatingActionCreator = {
	setRatingIsLoading: (isRatingLoading: boolean): RatingActions => ({ type: RatingActionTypes.SET_RATING_IS_LOADING, payload: isRatingLoading }),
	setError: (ratingError: string): RatingActions => ({ type: RatingActionTypes.SET_RATING_ERROR, payload: ratingError }),

	putRating: (rate: number, bookId: number) => async (dispatch: AppDispatch) => {
		try {
			dispatch(RatingActionCreator.setRatingIsLoading(true))
			const response = await RatingService.createRating(rate, bookId)
		}
		catch (e: any) {
			dispatch(RatingActionCreator.setError(e.response?.data?.errors))
		}
		finally {
			dispatch(RatingActionCreator.setRatingIsLoading(false))
		}
	}
}