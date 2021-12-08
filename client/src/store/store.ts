import { ratingReducer } from './reducers/ratingReducer'
import { cartReducer } from './reducers/cartReducer'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from './reducers/authReducer'
import { genreAuthorReducer } from './reducers/genreAuthorReducer'
import { goodsReducer } from './reducers/goodsReducer'


const reducers = combineReducers({
	auth: authReducer,
	genreAuthor: genreAuthorReducer,
	goods: goodsReducer,
	cart: cartReducer,
	rating: ratingReducer
})

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch

const store = createStore(reducers, applyMiddleware(thunk))

export default store