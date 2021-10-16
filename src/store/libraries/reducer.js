import { libraryData } from './states/libraryData'
import { bookData } from './states/bookData'

const INIT_STATE = {
    libraryData,
    bookData
}

const libraryReducer = (state= INIT_STATE) =>{
    return state
}

export default libraryReducer