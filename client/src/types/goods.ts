import { IProduct } from './IProduct'


export interface IGoodsList {
	goods: IProduct[],
	isLoading: boolean,
	error: string,
	product: IProduct,
	page: number,
	totalCount: number,
	limit: number,
	newProducts: IProduct[]
}

export enum GoodsActionTypes {
	SET_GOODS = 'SET_GOODS',
	SET_IS_LOADING = 'SET_IS_LOADING',
	SET_ERROR = 'SET_ERROR',
	SET_PRODUCT = 'SET_PRODUCT',
	SET_PAGE = 'SET_PAGE',
	SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
	SET_LIMIT = 'SET_LIMIT',
	SET_NEW_PRODUCTS = 'SET_NEW_PRODUCTS',
	ADD_PRODUCT = 'ADD_PRODUCT',
	DELETE_PRODUCT = 'DELETE_PRODUCT'
}

interface SetGoodsAction {
	type: GoodsActionTypes.SET_GOODS,
	payload: IProduct[]
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

interface SetNewProductsAction {
	type: GoodsActionTypes.SET_NEW_PRODUCTS,
	payload: IProduct[]
}

interface AddProductAction {
	type: GoodsActionTypes.ADD_PRODUCT,
	payload: FormData
}

interface DeleteProductAction {
	type: GoodsActionTypes.DELETE_PRODUCT,
	payload: number
}

export type GoodsActions =
	SetGoodsAction |
	SetIsLoadingAction |
	SetErrorAction |
	SetProductAction |
	SetPageAction |
	SetTotalCountAction |
	SetLimitAction |
	SetNewProductsAction |
	AddProductAction |
	DeleteProductAction

