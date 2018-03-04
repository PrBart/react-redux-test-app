import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import storeReducer from './reducers/storeReducer'

export default combineReducers({
    router: routerReducer,
	store: storeReducer
})