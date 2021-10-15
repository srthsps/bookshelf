import { combineReducers } from 'redux'

import Layout from "./layout/reducer"
import libraryReducer from "./libraries/reducer"

// import Login from "./auth/login/reducer"

const rootReducer  = combineReducers({
    Layout,
    libraryReducer
})

export default rootReducer