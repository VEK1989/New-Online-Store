import { IProduct } from './IProduct'
import { IGoods } from "./IGoods"


export interface IGoodsList {
	goods: IGoods[],
	isLoading: boolean,
	error: string,
	product: IProduct
}

export enum GoodsActionTypes {
	SET_GOODS = 'SET_GOODS',
	SET_IS_LOADING = 'SET_IS_LOADING',
	SET_ERROR = 'SET_ERROR',
	SET_PRODUCT = 'SET_PRODUCT'
}

interface SetGoodsAction {
	type: GoodsActionTypes.SET_GOODS,
	payload: IGoods[]
}

interface SetIsLoadingAction {
	type: GoodsActionTypes.SET_IS_LOADING,
	payload: boolean
}

interface SetErrorAction {
	type: GoodsActionTypes.SET_ERROR,
	payload: string
}

interface SetProductAction {
	type: GoodsActionTypes.SET_PRODUCT,
	payload: IProduct
}

export type GoodsActions =
	SetGoodsAction |
	SetIsLoadingAction |
	SetErrorAction |
	SetProductAction

