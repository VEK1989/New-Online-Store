import { GoodsActions, GoodsActionTypes, IGoodsList } from '../../types/goods'

const initialState: IGoodsList = {
	goods: [],
	isLoading: false,
	error: ''
}


export const goodsReducer = (state = initialState, action: GoodsActions): IGoodsList => {
	switch (action.type) {
		case GoodsActionTypes.SET_GOODS:
			return {
				...state,
				goods: action.payload
			}

		case GoodsActionTypes.SET_IS_LOADING:
			return {
				...state,
				isLoading: action.payload
			}

		case GoodsActionTypes.SET_ERROR:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}

		default:
			return state
	}
}