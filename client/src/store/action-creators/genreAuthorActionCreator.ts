import { GenreAuthorActions, GenreAuthorActionTypes } from './../../types/genreAuthor'
import { IAuthor, IGenre } from '../../types/IGenreAuthor'
import { AppDispatch } from '../store'
import GenreAuthorService from '../../service/GenreAuthorService'


export const GenreAuthorActionCreator = {
	setAuthor: (author: IAuthor[]): GenreAuthorActions => ({ type: GenreAuthorActionTypes.SET_AUTHOR, payload: author }),
	setGenre: (genre: IGenre[]): GenreAuthorActions => ({ type: GenreAuthorActionTypes.SET_GENRE, payload: genre }),
	setError: (error: string): GenreAuthorActions => ({ type: GenreAuthorActionTypes.SET_ERROR, payload: error }),
	setSelectedGenre: (genre: IGenre): GenreAuthorActions => ({ type: GenreAuthorActionTypes.SET_SELECTED_GENRE, payload: genre }),

	loadingGenre: () => async (dispatch: AppDispatch) => {
		try {
			const response = await GenreAuthorService.getGenre()
			dispatch(GenreAuthorActionCreator.setGenre(response.data))
		}
		catch (e: any) {
			dispatch(GenreAuthorActionCreator.setError(e.response?.data?.message))
		}
	},

	loadingAuthor: () => async (dispatch: AppDispatch) => {
		try {
			const response = await GenreAuthorService.getAthor()
			dispatch(GenreAuthorActionCreator.setAuthor(response.data))
		}
		catch (e: any) {
			dispatch(GenreAuthorActionCreator.setError(e.response?.data?.message))
		}
	}
}