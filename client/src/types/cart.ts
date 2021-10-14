import { ICart } from './ICart'

export interface ICartList {
	cart: ICart[],
	isCartLoading: boolean,
	cartError: string
}

export enum CartActionTypes {
	SET_CART = 'SET_CART',
	SET_CART_IS_LOADING = 'SET_CART_IS_LOADING',
	SET_CART_ERROR = 'SET_CART_ERROR',
}

interface SetCartAction {
	type: CartActionTypes.SET_CART,
	payload: ICart[]
}

interface SetCartIsLoadingAction {
	type: CartActionTypes.SET_CART_IS_LOADING,
	payload: boolean
}

interface SetCartErrorAction {
	type: CartActionTypes.SET_CART_ERROR,
	payload: string
}

export type CartActions =
	SetCartAction |
	SetCartIsLoadingAction |
	SetCartErrorAction