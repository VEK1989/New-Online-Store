import { ICart } from './ICart'

export interface ICartList {
	cart: ICart[],
	isCartLoading: boolean,
	cartError: string,
	countGoods: number,
	allCartPrice: number
}

export enum CartActionTypes {
	SET_CART = 'SET_CART',
	SET_CART_IS_LOADING = 'SET_CART_IS_LOADING',
	SET_CART_ERROR = 'SET_CART_ERROR',
	SET_COUNT_GOODS = 'SET_COUNT_GOODS',
	SET_ALL_CART_PRICE = 'SET_ALL_CART_PRICE'
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

interface SetCountGoodsActoin {
	type: CartActionTypes.SET_COUNT_GOODS,
	payload: number
}

interface SetAllCartPriceAction {
	type: CartActionTypes.SET_ALL_CART_PRICE,
	payload: number
}

export type CartActions =
	SetCartAction |
	SetCartIsLoadingAction |
	SetCartErrorAction |
	SetCountGoodsActoin |
	SetAllCartPriceAction