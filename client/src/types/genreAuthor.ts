import { IGenre, IAuthor } from './IGenreAuthor'

export interface TGenreAuth {
	author: IAuthor[],
	genre: IGenre[],
	error: string,
	selectedGenre: IGenre[]
}

export enum GenreAuthorActionTypes {
	SET_GENRE = 'SET_GENRE',
	SET_AUTHOR = 'SET_AUTHOR',
	SET_ERROR = 'SET_ERROR',
	SET_SELECTED_GENRE = 'SET_SELECTED_GENRE'
}

interface SetGenreAction {
	type: GenreAuthorActionTypes.SET_GENRE,
	payload: IGenre[]
}

interface SetAuthorAction {
	type: GenreAuthorActionTypes.SET_AUTHOR,
	payload: IAuthor[]
}

interface SetErrorAction {
	type: GenreAuthorActionTypes.SET_ERROR,
	payload: string
}

interface SetSelectedGenreAction {
	type: GenreAuthorActionTypes.SET_SELECTED_GENRE,
	payload: IGenre
}

export type GenreAuthorActions =
	SetGenreAction |
	SetAuthorAction |
	SetErrorAction |
	SetSelectedGenreAction