import { IGenre, IAuthor } from './IGenreAuthor'

export interface TGenreAuth {
	author: IAuthor[],
	genre: IGenre[],
	error: string,
	selectedGenre: IGenre[],
	selectedAuthor: IAuthor[]
}

export enum GenreAuthorActionTypes {
	SET_GENRE = 'SET_GENRE',
	SET_AUTHOR = 'SET_AUTHOR',
	SET_ERROR = 'SET_ERROR',
	SET_SELECTED_GENRE = 'SET_SELECTED_GENRE',
	SET_SELECTED_AUTHOR = 'SET_SELECTED_AUTHOR',
	ADD_GENRE = 'ADD_GENRE',
	ADD_AUTHOR = 'ADD_AUTHOR',
	DELETE_GENRE = 'DELETE_GENRE',
	DELETE_AUTHOR = 'DELETE_AUTHOR'
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

interface SetSelectedAuthor {
	type: GenreAuthorActionTypes.SET_SELECTED_AUTHOR,
	payload: IAuthor
}

interface AddGenreAction {
	type: GenreAuthorActionTypes.ADD_GENRE,
	payload: string
}

interface AddAuthorAction {
	type: GenreAuthorActionTypes.ADD_AUTHOR,
	payload: string
}

interface DeleteAuthorAction {
	type: GenreAuthorActionTypes.DELETE_AUTHOR,
	payload: number
}

interface DeleteGenreAction {
	type: GenreAuthorActionTypes.DELETE_GENRE,
	payload: number
}

export type GenreAuthorActions =
	SetGenreAction |
	SetAuthorAction |
	SetErrorAction |
	SetSelectedGenreAction |
	SetSelectedAuthor |
	AddGenreAction |
	AddAuthorAction |
	DeleteAuthorAction |
	DeleteGenreAction