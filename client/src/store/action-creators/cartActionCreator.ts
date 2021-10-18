import { AppDispatch } from './../store'
import { CartActions, CartActionTypes } from '../../types/cart'
import CartService from '../../service/CartService'
import { ICart } from '../../types/ICart'


export const CartActionCreator = {
	setCart: (cart: ICart[]): CartActions => ({ type: CartActionTypes.SET_CART, payload: cart }),
	setCartIsLoading: (loading: boolean): CartActions => ({ type: CartActionTypes.SET_CART_IS_LOADING, payload: loading }),
	setError: (error: string): CartActions => ({ type: CartActionTypes.SET_CART_ERROR, payload: error }),
	setCountGoods: (countGoods: number): CartActions => ({ type: CartActionTypes.SET_COUNT_GOODS, payload: countGoods }),
	setAllCartPrice: (allCartPrice: number): CartActions => ({ type: CartActionTypes.SET_ALL_CART_PRICE, payload: allCartPrice }),

	getProductListFromCart: () => async (dispatch: AppDispatch) => {
		try {
			dispatch(CartActionCreator.setCartIsLoading(true))
			const response = await CartService.fetchCart()
			dispatch(CartActionCreator.setCart(response.data))
			dispatch(CartActionCreator.setCountGoods(response.data.length))
		}
		catch (e: any) {
			dispatch(CartActionCreator.setError(e.response?.data?.errors))
		}
		finally {
			dispatch(CartActionCreator.setCartIsLoading(false))
		}
	},

	putProductInMyCart: (id: number) => async (dispatch: AppDispatch) => {
		try {
			dispatch(CartActionCreator.setCartIsLoading(true))
			await CartService.putProductInCart(id)
		}
		catch (e: any) {
			dispatch(CartActionCreator.setError(e.response?.data?.errors))
		}
		finally {
			dispatch(CartActionCreator.setCartIsLoading(false))
		}
	},

	deleteProductFromCart: (id: number) => async (dispatch: AppDispatch) => {
		try {
			dispatch(CartActionCreator.setCartIsLoading(true))
			await CartService.deleteFromCart(id)
		}
		catch (e: any) {
			dispatch(CartActionCreator.setError(e.response?.data?.errors))
		}
		finally {
			dispatch(CartActionCreator.setCartIsLoading(false))
		}
	}
}