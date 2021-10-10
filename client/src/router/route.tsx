import Admin from '../pages/Admin/Admin'
import Auth from '../pages/Auth/Auth'
import Cart from '../pages/Cart/Cart'
import ProductPage from '../pages/Product/ProductPage'
import Shop from '../pages/Shop/Shop'
import { ADMIN_ROUTE, CART_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'


export const privateRoutes = [
	{ path: ADMIN_ROUTE, Component: Admin },
	{ path: CART_ROUTE, Component: Cart }
]

export const publicRoutes = [
	{ path: SHOP_ROUTE, Component: Shop },
	{ path: LOGIN_ROUTE, Component: Auth },
	{ path: `${PRODUCT_ROUTE}/:id`, Component: ProductPage },
	{ path: REGISTRATION_ROUTE, Component: Auth }
]