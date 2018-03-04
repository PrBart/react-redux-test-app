import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import actions from './actions'

export default combineReducers({
    router: routerReducer,
    actions
})