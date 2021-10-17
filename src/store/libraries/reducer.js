import { libraryData } from './states/libraryData'
import { bookData } from './states/bookData'
import { employeeData } from './states/employeeData'

const INIT_STATE = {
    libraryData,
    bookData,
    employeeData
}

const libraryReducer = (state= INIT_STATE) =>{
    return state
}

export default libraryReducer