import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from './reducers/authReducer'
import { genreAuthorReducer } from './reducers/genreAuthorReducer'


const reducers = combineReducers({
	auth: authReducer,
	genreAuthor: genreAuthorReducer
})

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch

const store = createStore(reducers, applyMiddleware(thunk))

export default store