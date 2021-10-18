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
	setPage: (page: number): GoodsActions => ({ type: GoodsActionTypes.SET_PAGE, payload: page }),
	setTotalCount: (totalCount: number): GoodsActions => ({ type: GoodsActionTypes.SET_TOTAL_COUNT, payload: totalCount }),
	setLimit: (limit: number): GoodsActions => ({ type: GoodsActionTypes.SET_LIMIT, payload: limit }),

	getAllGoods: (authorId?: number | null, genreId?: number | null, limit?: number, page?: number) => async (dispatch: AppDispatch) => {
		try {
			dispatch(GoodsActionCreator.setIsLoading(true))
			const response = await GoodsService.fetchGoods(authorId, genreId, limit, page)
			dispatch(GoodsActionCreator.setGoods(response.data.rows))
			dispatch(GoodsActionCreator.setTotalCount(response.data.count))
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