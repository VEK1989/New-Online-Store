import GoodsService from '../../service/GoodsService'
import { AppDispatch } from '../store'
import { GoodsActions, GoodsActionTypes } from './../../types/goods'
import { IGoods } from './../../types/IGoods'

export const GoodsActionCreator = {
	setGoods: (goods: IGoods[]): GoodsActions => ({ type: GoodsActionTypes.SET_GOODS, payload: goods }),
	setIsLoading: (loading: boolean): GoodsActions => ({ type: GoodsActionTypes.SET_IS_LOADING, payload: loading }),
	setError: (error: string): GoodsActions => ({ type: GoodsActionTypes.SET_ERROR, payload: error }),

	getAllGoods: () => async (dispatch: AppDispatch) => {
		try {
			dispatch(GoodsActionCreator.setIsLoading(true))
			const response = await GoodsService.fetchGoods()
			dispatch(GoodsActionCreator.setGoods(response.data.raws))
		}
		catch (e: any) {
			dispatch(GoodsActionCreator.setError(e.response?.data?.errors))
		}
		finally {
			dispatch(GoodsActionCreator.setIsLoading(false))
		}
	}
}