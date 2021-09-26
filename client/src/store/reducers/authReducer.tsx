import { AuthActions, AuthActionTypes, TAuth } from '../../types/auth'

const initialState: TAuth = {
	isAuth: false,
}

export const authReducer = (state = initialState, action: AuthActions): TAuth => {
	switch (action.type) {
		case AuthActionTypes.SET_AUTH:
			return {
				...state,
				isAuth: action.payload
			}
		default:
			return state
	}
}