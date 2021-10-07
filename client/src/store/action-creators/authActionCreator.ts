import AuthService from '../../service/AuthService'
import { AuthActions, AuthActionTypes } from '../../types/auth'
import { AppDispatch } from '../store'
import { TUser } from './../../types/TUser'


export const AuthActionCreator = {
	setUser: (user: TUser): AuthActions => ({ type: AuthActionTypes.SET_USER, payload: user }),
	setIsAuth: (auth: boolean): AuthActions => ({ type: AuthActionTypes.SET_AUTH, payload: auth }),
	setError: (error: string): AuthActions => ({ type: AuthActionTypes.SET_ERROR, payload: error }),
	setIsLoading: (loading: boolean): AuthActions => ({ type: AuthActionTypes.SET_IS_LOADING, payload: loading }),

	login: (email: string, password: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreator.setIsLoading(true))
			const response = await AuthService.login(email, password)
			console.log(response)
			localStorage.setItem('token', response.data.accessToken)
			dispatch(AuthActionCreator.setIsAuth(true))
			dispatch(AuthActionCreator.setUser(response.data.user))

		} catch (e: any) {
			dispatch(AuthActionCreator.setError(e.response?.data?.message))
		}
	},

	registration: (email: string, password: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreator.setIsLoading(true))
			const response = await AuthService.registration(email, password)
			localStorage.setItem('token', response.data.accessToken)
			dispatch(AuthActionCreator.setIsAuth(true))
			dispatch(AuthActionCreator.setUser(response.data.user))

		} catch (e: any) {
			dispatch(AuthActionCreator.setError(e.response?.data?.message))
		}
	},

	logout: () => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreator.setIsLoading(true))
			await AuthService.logout()
			localStorage.removeItem('token')
			dispatch(AuthActionCreator.setIsAuth(true))
			dispatch(AuthActionCreator.setUser({} as TUser))

		} catch (e: any) {
			dispatch(AuthActionCreator.setError(e.response?.data?.message))
		}
	}
}