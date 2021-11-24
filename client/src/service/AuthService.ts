import { AxiosResponse } from 'axios'
import apiInstance from '../http/index'
import { AuthResponse } from '../types/authResponse'

export default class AuthService {
	static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
		return await apiInstance.post<AuthResponse>('user/login', { email, password })
	}

	static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
		return await apiInstance.post<AuthResponse>('user/registration', { email, password })
	}

	static async logout(email: string): Promise<void> {
		return await apiInstance.post('user/logout', { email })
	}
}