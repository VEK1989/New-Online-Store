import { ICart } from './../types/ICart'
import { AxiosResponse } from 'axios'
import apiInstance from '../http'


export default class CartService {
	static async fetchCart(): Promise<AxiosResponse<ICart[]>> {
		return await apiInstance.get<ICart[]>('cart')
	}

	static async putProductInCart(id: number): Promise<AxiosResponse<string>> {
		return await apiInstance.post<string>('cart', { id: `${id}` })
	}

	static async deleteFromCart(id: number): Promise<AxiosResponse<string>> {
		return await apiInstance.delete<string>(`cart/${id}`)
	}
}