import { AxiosResponse } from 'axios'
import apiInstance from '../http'

export default class RatingService {
	static async createRating(rate: number, bookId: number): Promise<AxiosResponse> {
		return await apiInstance.post('rating', { rate, bookId })
	}
}