import { IProduct } from './../../types/IProduct'
import GoodsService from '../../service/GoodsService'
import { AppDispatch } from '../store'
import { GoodsActions, GoodsActionTypes } from './../../types/goods'
import { IGoods } from './../../types/IGoods'

export const GoodsActionCreator = {
	setGoods: (goods: IGoods[]): GoodsActions => ({ type: GoodsActionTypes.SET_GOODS, payload: goods }),
	setIsLoading: (loading: boolean): GoodsActions => ({ type: GoodsActionTypes.SET_IS_LOADING, payload: loading }),
	setError: (error: string): GoodsActions => ({ type: GoodsActionTypes.SET_ERROR, payload: error }),
	setProduct: (product: IProduct): GoodsActions => ({ type: GoodsActionTypes.SET_PRODUCT, payload: product }),

	getAllGoods: () => async (dispatch: AppDispatch) => {
		try {
			dispatch(GoodsActionCreator.setIsLoading(true))
			const response = await GoodsService.fetchGoods()
			dispatch(GoodsActionCreator.setGoods(response.data.rows))
		}
		catch (e: any) {
			dispatch(GoodsActionCreator.setError(e.response?.data?.errors))
		}
		finally {
			dispatch(GoodsActionCreator.setIsLoading(false))
		}
	},

	getOneProduct: (id: number) => async (dispatch: AppDispatch) => {
		try {
			dispatch(GoodsActionCreator.setIsLoading(true))
			const response = await GoodsService.fetchProduct(id)
			dispatch(GoodsActionCreator.setProduct(response.data))
		}
		catch (e: any) {
			dispatch(GoodsActionCreator.setError(e.response?.data?.errors))
		}
		finally {
			dispatch(GoodsActionCreator.setIsLoading(false))
		}
	}
}