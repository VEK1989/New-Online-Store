import { AxiosResponse } from 'axios'
import apiInstance from '../http/index'
import { AuthResponse } from '../types/authResponse'

export default class AuthService {
	static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
		return apiInstance.post<AuthResponse>('user/login', { email, password })
	}

	static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
		return apiInstance.post<AuthResponse>('user/registration', { email, password })
	}

	static async logout(): Promise<void> {
		return apiInstance.post('user/logout')
	}
}