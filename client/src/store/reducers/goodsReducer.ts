import { GoodsActions, GoodsActionTypes, IGoodsList } from '../../types/goods'
import { IProduct } from '../../types/IProduct'

const initialState: IGoodsList = {
	goods: [],
	isLoading: false,
	error: '',
	product: {} as IProduct,
	page: 1,
	totalCount: 0,
	limit: 12,
	newProducts: []
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

		case GoodsActionTypes.SET_PRODUCT:
			return {
				...state,
				product: action.payload
			}

		case GoodsActionTypes.SET_PAGE:
			return {
				...state,
				page: action.payload
			}

		case GoodsActionTypes.SET_TOTAL_COUNT:
			return {
				...state,
				totalCount: action.payload
			}

		case GoodsActionTypes.SET_LIMIT:
			return {
				...state,
				limit: action.payload
			}

		case GoodsActionTypes.SET_NEW_PRODUCTS:
			return {
				...state,
				newProducts: action.payload
			}

		// case GoodsActionTypes.ADD_PRODUCT:
		// 	return {
		// 		...state,
		// 		goods: [
		// 			...state.goods,
		// 			action.payload
		// 		]
		// 	}

		case GoodsActionTypes.DELETE_PRODUCT:
			return {
				...state,
				goods: state.goods.filter(item => item.id !== action.payload)
			}

		default:
			return state
	}
}