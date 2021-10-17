import { libraryData } from './states/libraryData'
import { bookData } from './states/bookData'
import { employeeData } from './states/employeeData'
import { membersData } from './states/membersData'

const INIT_STATE = {
    libraryData,
    bookData,
    employeeData,
    membersData
}

const libraryReducer = (state= INIT_STATE) =>{
    return state
}

export default libraryReducer