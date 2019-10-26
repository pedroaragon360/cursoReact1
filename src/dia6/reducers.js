import {combineReducers} from 'redux'

import Login from './Login/login.reducers'
import postsR from './Posts/posts.reducers'

export default combineReducers({
    Login, postsR
})