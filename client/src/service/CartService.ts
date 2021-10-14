import { ICart } from './../types/ICart'
import { AxiosResponse } from 'axios'
import apiInstance from '../http'


export default class CartService {
	static async fetchCart(): Promise<AxiosResponse<ICart[]>> {
		return apiInstance.get<ICart[]>('cart')
	}

	static async putProductInCart(): Promise<AxiosResponse<string>> {
		return apiInstance.post<string>('cart')
	}

	static async deleteProductFromCart(id: number): Promise<AxiosResponse<string>> {
		return apiInstance.delete<string>(`cart/${id}`)
	}
}