
import { CHANGE_SIDEBAR_TYPE } from "./actionTypes"
  
  const INIT_STATE = {
    leftSideBarType: "default",
    isMobile: false
  }
  
  const Layout = (state = INIT_STATE, action) => {
    switch (action.type) {
      case CHANGE_SIDEBAR_TYPE:
        return {
          ...state,
          leftSideBarType: action.payload.sidebarType,
        }
      default:
        return state
    }
  }
  
  export default Layout
  