import { IGoods } from "./IGoods";


export interface IGoodsList {
	goods: IGoods[],
	isLoading: boolean,
	error: string
}

export enum GoodsActionTypes {
	SET_GOODS = 'SET_GOODS',
	SET_IS_LOADING = 'SET_IS_LOADING',
	SET_ERROR = 'SET_ERROR'
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

export type GoodsActions =
	SetGoodsAction |
	SetIsLoadingAction |
	SetErrorAction

