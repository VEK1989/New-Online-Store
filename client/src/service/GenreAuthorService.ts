import { AxiosResponse } from 'axios'
import apiInstance from '../http/index'
import { IAuthor, IGenre } from '../types/IGenreAuthor'

export default class GenreAuthorService {
	static async getGenre(): Promise<AxiosResponse<IGenre[]>> {
		return await apiInstance.get<IGenre[]>('genre')
	}

	static async createGenre(genre: { name: string }): Promise<AxiosResponse> {
		return await apiInstance.post('genre', genre)
	}

	static async deleteGenre(id: number): Promise<AxiosResponse> {
		return await apiInstance.delete(`genre/${id}`)
	}

	static async getAthor(): Promise<AxiosResponse<IAuthor[]>> {
		return await apiInstance.get<IAuthor[]>('author')
	}

	static async createAuthor(author: { name: string }): Promise<AxiosResponse> {
		return await apiInstance.post('author', author)
	}

	static async deleteAuthor(id: number): Promise<AxiosResponse> {
		return await apiInstance.delete(`author/${id}`)
	}
}