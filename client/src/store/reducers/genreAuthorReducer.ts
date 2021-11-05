import { GenreAuthorActions, GenreAuthorActionTypes, TGenreAuth } from '../../types/genreAuthor'

const initialState: TGenreAuth = {
	author: [],
	genre: [],
	error: '',
	selectedGenre: [],
	selectedAuthor: []
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

		case GenreAuthorActionTypes.SET_SELECTED_AUTHOR:
			return {
				...state,
				selectedAuthor: [action.payload]
			}

		case GenreAuthorActionTypes.ADD_GENRE:
			return {
				...state,
				genre: [
					...state.genre,
					{
						id: state.genre.length + 1,
						name: action.payload
					}
				]
			}

		case GenreAuthorActionTypes.ADD_AUTHOR:
			return {
				...state,
				author: [
					...state.author,
					{
						id: state.author.length + 1,
						name: action.payload
					}
				]
			}

		case GenreAuthorActionTypes.DELETE_GENRE:
			return {
				...state,
				genre: state.genre.filter(item => item.id !== action.payload)
			}

		case GenreAuthorActionTypes.DELETE_AUTHOR:
			return {
				...state,
				author: state.author.filter(item => item.id !== action.payload)
			}

		default:
			return state
	}
}