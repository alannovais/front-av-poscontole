import { combineReducers } from 'redux'
import list from './list/index.js'
import login from './login/index.js'

const rootReducer = combineReducers({
    list,
    login,
})

export default rootReducer;
