import { combineReducers } from 'redux'
import list from './list/index.js'

const rootReducer = combineReducers({
    list,
})

export default rootReducer;
