import { GenreAuthorActions, GenreAuthorActionTypes, TGenreAuth } from '../../types/genreAuthor'

const initialState: TGenreAuth = {
	author: [],
	genre: [],
	error: '',
	selectedGenre: []
}

export const genreAuthorReducer = (state = initialState, action: GenreAuthorActions): TGenreAuth => {
	switch (action.type) {
		case GenreAuthorActionTypes.SET_AUTHOR:
			return {
				...state,
				author: action.payload
			}

		case GenreAuthorActionTypes.SET_GENRE:
			return {
				...state,
				genre: action.payload
			}

		case GenreAuthorActionTypes.SET_ERROR:
			return {
				...state,
				error: action.payload
			}

		case GenreAuthorActionTypes.SET_SELECTED_GENRE:
			return {
				...state,
				selectedGenre: [action.payload]
			}

		default:
			return state
	}
}