import axios from 'axios'
import { AuthResponse } from '../types/authResponse'

export const API_URL = `http://localhost:5000/api/`

const apiInstance = axios.create({
	withCredentials: true,
	baseURL: API_URL
})

apiInstance.interceptors.request.use((config) => {
	config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
	return config
})

apiInstance.interceptors.response.use((config) => {
	return config
}, async (error) => {
	const originalRequest = error.config
	if (error.response.status == 401 && error.config && !error.config._isRetry) {
		originalRequest._isRetry = true
		try {
			const response = await axios.get<AuthResponse>(`${API_URL}user/refresh`, { withCredentials: true })
			localStorage.setItem('token', response.data.accessToken)
			return apiInstance.request(originalRequest)
		}
		catch (e) {
			console.log('Не авторизован')
		}
	}
	throw error
})

export default apiInstance