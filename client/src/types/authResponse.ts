import { TUser } from './TUser'

export interface AuthResponse {
	accessToken: string,
	refreshToken: string,
	user: TUser
}