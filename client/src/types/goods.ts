import { IProduct } from './IProduct'
import { IGoods } from "./IGoods"


export interface IGoodsList {
	goods: IGoods[],
	isLoading: boolean,
	error: string,
	product: IProduct,
	page: number,
	totalCount: number,
	limit: number
}

export enum GoodsActionTypes {
	SET_GOODS = 'SET_GOODS',
	SET_IS_LOADING = 'SET_IS_LOADING',
	SET_ERROR = 'SET_ERROR',
	SET_PRODUCT = 'SET_PRODUCT',
	SET_PAGE = 'SET_PAGE',
	SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
	SET_LIMIT = 'SET_LIMIT'
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

interface SetPageAction {
	type: GoodsActionTypes.SET_PAGE,
	payload: number
}

interface SetTotalCountAction {
	type: GoodsActionTypes.SET_TOTAL_COUNT,
	payload: number
}

interface SetLimitAction {
	type: GoodsActionTypes.SET_LIMIT,
	payload: number
}

export type GoodsActions =
	SetGoodsAction |
	SetIsLoadingAction |
	SetErrorAction |
	SetProductAction |
	SetPageAction |
	SetTotalCountAction |
	SetLimitAction

