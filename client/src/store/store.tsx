import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from './reducers/authReducer'


const reducers = combineReducers({
	auth: authReducer,
})

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch

const store = createStore(reducers, applyMiddleware(thunk))

export default store