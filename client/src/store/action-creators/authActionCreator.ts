import axios from 'axios'
import { API_URL } from '../../http'
import AuthService from '../../service/AuthService'
import { AuthActions, AuthActionTypes } from '../../types/auth'
import { AuthResponse } from '../../types/authResponse'
import { AppDispatch } from '../store'
import { IUser } from '../../types/IUser'


export const AuthActionCreator = {
	setUser: (user: IUser): AuthActions => ({ type: AuthActionTypes.SET_USER, payload: user }),
	setIsAuth: (auth: boolean): AuthActions => ({ type: AuthActionTypes.SET_AUTH, payload: auth }),
	setError: (error: string): AuthActions => ({ type: AuthActionTypes.SET_ERROR, payload: error }),
	setIsLoading: (loading: boolean): AuthActions => ({ type: AuthActionTypes.SET_IS_LOADING, payload: loading }),

	login: (email: string, password: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreator.setIsLoading(true))
			const response = await AuthService.login(email, password)
			localStorage.setItem('token', response.data.accessToken)
			dispatch(AuthActionCreator.setIsAuth(true))
			dispatch(AuthActionCreator.setUser(response.data.user))

		} catch (e: any) {
			dispatch(AuthActionCreator.setError(e.response?.data?.errors))
		}
		finally {
			dispatch(AuthActionCreator.setIsLoading(false))
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
			dispatch(AuthActionCreator.setError(e.response?.data?.errors))
		}
		finally {
			dispatch(AuthActionCreator.setIsLoading(false))
		}
	},

	logout: (email: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreator.setIsLoading(true))
			await AuthService.logout(email)
			localStorage.removeItem('token')
			dispatch(AuthActionCreator.setIsAuth(false))
			dispatch(AuthActionCreator.setUser({} as IUser))

		} catch (e: any) {
			dispatch(AuthActionCreator.setError(e.response?.data?.errors))
		}
		finally {
			dispatch(AuthActionCreator.setIsLoading(false))
		}
	},

	checkAuth: () => async (dispatch: AppDispatch) => {
		try {
			const response = await axios.get<AuthResponse>(`${API_URL}user/refresh`, { withCredentials: true })
			localStorage.setItem('token', response.data.accessToken)
			dispatch(AuthActionCreator.setIsAuth(true))
			dispatch(AuthActionCreator.setUser(response.data.user))
		}
		catch (e: any) {
			dispatch(AuthActionCreator.setError(e.response?.data?.errors))
		}
		finally {
			dispatch(AuthActionCreator.setIsLoading(false))
		}
	}
}