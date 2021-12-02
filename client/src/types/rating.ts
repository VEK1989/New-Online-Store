
export interface TRating {
	isRatingLoading: boolean,
	ratingError: string
}

export enum RatingActionTypes {
	SET_RATING_IS_LOADING = 'SET_RATING_IS_LOADING',
	SET_RATING_ERROR = 'SET_RATING_ERROR'
}

interface SetIsRatingLoadingAction {
	type: RatingActionTypes.SET_RATING_IS_LOADING,
	payload: boolean
}

interface SetRatingErrorAction {
	type: RatingActionTypes.SET_RATING_ERROR,
	payload: string
}

export type RatingActions =
	SetIsRatingLoadingAction |
	SetRatingErrorAction