import { IProduct } from './../types/IProduct'
import { AxiosResponse } from 'axios'
import apiInstance from '../http'
import { GoodsResponse } from '../types/goodsResponse'

export default class GoodsService {
	static async fetchGoods(authorId?: number | null, genreId?: number | null, limit?: number, page?: number): Promise<AxiosResponse<GoodsResponse>> {
		return apiInstance.get<GoodsResponse>('book', {
			params: {
				authorId, genreId, limit, page
			}
		})
	}

	static async fetchProduct(id: number): Promise<AxiosResponse<IProduct>> {
		return apiInstance.get<IProduct>(`book/${id}`)
	}
}

