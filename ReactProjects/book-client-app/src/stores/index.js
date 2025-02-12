import {userReducer} from './user-store'
import { authorsReducer, selectedAuthorReducer } from './author-store'
import { statusReducer } from './status-store'
import { combineReducers, createStore } from 'redux'


const reducer = combineReducers({
    authors:authorsReducer,
    selectedAuthor:selectedAuthorReducer,
    user:userReducer,
    status:statusReducer,  // This is for status management.
})

export default createStore(reducer);