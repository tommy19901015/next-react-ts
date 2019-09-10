import { combineReducers } from 'redux'
import users from './users';
import count from './count'
import text from './text'

export default combineReducers({
    users,
    count,
    text
})