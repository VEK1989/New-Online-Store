import { IUser } from "./IUser";

export interface IAuth {
	isAuth: boolean,
	user: IUser,
	isLoading: boolean,
	error: string
}

export enum AuthActionTypes {
	SET_AUTH = 'SET_AUTH',
	SET_USER = 'SET_USER',
	SET_IS_LOADING = 'SET_IS_LOADING',
	SET_ERROR = 'SET_ERROR'
}

interface SetAuthAction {
	type: AuthActionTypes.SET_AUTH,
	payload: boolean
}

interface SetUserAction {
	type: AuthActionTypes.SET_USER,
	payload: IUser
}

interface SetErrorAction {
	type: AuthActionTypes.SET_ERROR,
	payload: string
}

interface SetIsLoadingAction {
	type: AuthActionTypes.SET_IS_LOADING,
	payload: boolean
}

export type AuthActions =
	SetAuthAction |
	SetUserAction |
	SetErrorAction |
	SetIsLoadingAction