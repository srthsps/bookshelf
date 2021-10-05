import { combineReducers } from 'redux'

import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"

const rootReducer  = combineReducers({
    Layout,
    Login
})

export default rootReducer