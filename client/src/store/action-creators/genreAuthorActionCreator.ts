import { GenreAuthorActions, GenreAuthorActionTypes } from './../../types/genreAuthor'
import { IAuthor, IGenre } from '../../types/IGenreAuthor'
import { AppDispatch } from '../store'
import GenreAuthorService from '../../service/GenreAuthorService'


export const GenreAuthorActionCreator = {
	setAuthor: (author: IAuthor[]): GenreAuthorActions => ({ type: GenreAuthorActionTypes.SET_AUTHOR, payload: author }),
	setGenre: (genre: IGenre[]): GenreAuthorActions => ({ type: GenreAuthorActionTypes.SET_GENRE, payload: genre }),
	setError: (error: string): GenreAuthorActions => ({ type: GenreAuthorActionTypes.SET_ERROR, payload: error }),
	setSelectedGenre: (genre: IGenre): GenreAuthorActions => ({ type: GenreAuthorActionTypes.SET_SELECTED_GENRE, payload: genre }),
	setSelectedAuthor: (author: IAuthor): GenreAuthorActions => ({ type: GenreAuthorActionTypes.SET_SELECTED_AUTHOR, payload: author }),
	addGenre: (name: string): GenreAuthorActions => ({ type: GenreAuthorActionTypes.ADD_GENRE, payload: name }),
	addAuthor: (name: string): GenreAuthorActions => ({ type: GenreAuthorActionTypes.ADD_AUTHOR, payload: name }),
	deleteGenre: (id: number): GenreAuthorActions => ({ type: GenreAuthorActionTypes.DELETE_GENRE, payload: id }),
	deleteAuthor: (id: number): GenreAuthorActions => ({ type: GenreAuthorActionTypes.DELETE_AUTHOR, payload: id }),

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
	},

	addNewGenre: (genreName: string) => async (dispatch: AppDispatch) => {
		try {
			await GenreAuthorService.createGenre({ name: genreName })
			dispatch(GenreAuthorActionCreator.addGenre(genreName))
		}
		catch (e: any) {
			dispatch(GenreAuthorActionCreator.setError(e.response?.data?.message))
		}
	},

	addNewAuthor: (authorName: string) => async (dispatch: AppDispatch) => {
		try {
			await GenreAuthorService.createAuthor({ name: authorName })
			dispatch(GenreAuthorActionCreator.addAuthor(authorName))
		}
		catch (e: any) {
			dispatch(GenreAuthorActionCreator.setError(e.response?.data?.message))
		}
	},

	removeGenre: (id: number) => async (dispatch: AppDispatch) => {
		try {
			await GenreAuthorService.deleteGenre(id)
			dispatch(GenreAuthorActionCreator.deleteGenre(id))
		}
		catch (e: any) {
			dispatch(GenreAuthorActionCreator.setError(e.response?.data?.message))
		}
	},

	removeAuthor: (id: number) => async (dispatch: AppDispatch) => {
		try {
			await GenreAuthorService.deleteAuthor(id)
			dispatch(GenreAuthorActionCreator.deleteAuthor(id))
		}
		catch (e: any) {
			dispatch(GenreAuthorActionCreator.setError(e.response?.data?.message))
		}
	},
}