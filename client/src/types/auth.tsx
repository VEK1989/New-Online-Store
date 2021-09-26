// export type TUser {
// 	id: number
// }

export interface TAuth {
	isAuth: boolean,
}

export enum AuthActionTypes {
	SET_AUTH = 'SET_AUTH'
}

interface SetAuthAction {
	type: AuthActionTypes.SET_AUTH,
	payload: boolean
}

export type AuthActions = SetAuthAction