import { AxiosResponse } from 'axios'
import apiInstance from '../http'
import { GoodsResponse } from '../types/goodsResponse'

export default class GoodsService {
	static async fetchGoods(): Promise<AxiosResponse<GoodsResponse>> {
		return apiInstance.get<GoodsResponse>('book')
	}
}

