import { IProduct } from './IProduct'

export interface GoodsResponse {
	count: number,
	rows: IProduct[]
}