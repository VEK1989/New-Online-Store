import axios from 'axios'

const API_URL = `http://localhost:5000/api/`

const apiInstance = axios.create({
	withCredentials: true,
	baseURL: API_URL
})

apiInstance.interceptors.request.use((config) => {
	config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
	return config
})

export default apiInstance