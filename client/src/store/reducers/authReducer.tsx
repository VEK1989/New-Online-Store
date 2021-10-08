import { AuthActions, AuthActionTypes, TAuth } from '../../types/auth'
import { IUser } from '../../types/IUser'

const initialState: TAuth = {
	isAuth: false,
	user: {} as IUser,
	isLoading: false,
	error: ''
}

export const authReducer = (state = initialState, action: AuthActions): TAuth => {
	switch (action.type) {
		case AuthActionTypes.SET_AUTH:
			return {
				...state,
				isAuth: action.payload,
				isLoading: false
			}

		case AuthActionTypes.SET_USER:
			return {
				...state,
				user: action.payload
			}

		case AuthActionTypes.SET_ERROR:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}

		case AuthActionTypes.SET_IS_LOADING:
			return {
				...state,
				isLoading: action.payload
			}

		default:
			return state
	}
}