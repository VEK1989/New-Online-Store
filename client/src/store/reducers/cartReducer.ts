import { CartActions, CartActionTypes, ICartList } from '../../types/cart'

const initialState: ICartList = {
	cart: [],
	isCartLoading: false,
	cartError: ''
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

		default:
			return state
	}
}