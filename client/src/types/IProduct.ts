import { InfoType } from './info'

export interface IProduct {
	id: number,
	name: string,
	price: number,
	rating: number,
	img: string,
	genreId: number,
	authorId: number,
	info: InfoType[]
}