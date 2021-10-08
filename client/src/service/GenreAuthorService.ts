import { AxiosResponse } from 'axios'
import apiInstance from '../http/index'
import { IAuthor, IGenre } from '../types/IGenreAuthor'

export default class GenreAuthorService {
	static async getGenre(): Promise<AxiosResponse<IGenre[]>> {
		return apiInstance.get<IGenre[]>('genre')
	}

	static async getAthor(): Promise<AxiosResponse<IAuthor[]>> {
		return apiInstance.get<IAuthor[]>('author')
	}
}