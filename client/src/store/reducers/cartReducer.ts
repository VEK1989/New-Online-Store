import { CartActions, CartActionTypes, ICartList } from '../../types/cart'

const initialState: ICartList = {
	cart: [],
	isCartLoading: false,
	cartError: '',
	countGoods: 0,
	allCartPrice: 0
}

export const cartReducer = (state = initialState, action: CartActions): ICartList => {
	switch (action.type) {
		case CartActionTypes.SET_CART:
			return {
				...state,
				cart: action.payload
			}

		case CartActionTypes.SET_CART_IS_LOADING:
			return {
				...state,
				isCartLoading: action.payload
			}

		case CartActionTypes.SET_CART_ERROR:
			return {
				...state,
				cartError: action.payload
			}

		case CartActionTypes.SET_COUNT_GOODS:
			return {
				...state,
				countGoods: action.payload
			}

		case CartActionTypes.SET_ALL_CART_PRICE:
			return {
				...state,
				allCartPrice: action.payload
			}

		default:
			return state
	}
}